import React, { Component } from "react";
import StatBlock from "./statblock";
import RoStatBlock from "./ro-statblock";
import CharSheetUtils from "../utils/charsheetutils";

class CharSheetPage extends Component {
  constructor(props) {
    super(props);
    this.inputXpRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    let xp = this.props.charSheet.xp;
    if (this.inputXpRef.current.value !== xp) {
      this.inputXpRef.current.value = xp;
    }
  }

  state = {
    statsList: ["CON", "STR", "DEX", "INT", "WIS", "CHA"]
  };

  handleIncrement = (data, statType) => {
    let charSheetCopy = this.props.charSheet;

    if (charSheetCopy.lastStatUpdate === statType) return;
    else {
      if (charSheetCopy.statpoints > 0) {
        charSheetCopy.statpoints -= 1;
      } else return;
      charSheetCopy.lastStatUpdate = statType;
      if (statType === "STR") charSheetCopy.str = data;
      if (statType === "INT") charSheetCopy.int = data;
      if (statType === "DEX") charSheetCopy.dex = data;
      if (statType === "WIS") charSheetCopy.wis = data;
      if (statType === "CON") charSheetCopy.con = data;
      if (statType === "CHA") charSheetCopy.cha = data;
    }

    this.setState({ charSheet: charSheetCopy });
  };

  handleXpUpdate = e => {
    let charSheetCopy = this.props.charSheet;

    charSheetCopy.lastxp = charSheetCopy.xp;
    let lastlvl = CharSheetUtils.getLevelFromXP(charSheetCopy);

    charSheetCopy.xp = +e.target.value;
    let curlvl = CharSheetUtils.getLevelFromXP(charSheetCopy);

    //Update SP based on new lvl
    if (curlvl - lastlvl >= 1) {
      charSheetCopy.sp += (curlvl - lastlvl) * 2;
      charSheetCopy.statpoints += (curlvl - lastlvl) * 2;
      charSheetCopy.lastStatUpdate = "";
    } else if (curlvl - lastlvl < 1) {
      //Lvl went down, we'll be over assigned on the skilpoints so reset the skilltree
      //Also reset stat points assignation
      let skilltreeCopy = this.props.skilltree;
      for (let idx in skilltreeCopy) {
        skilltreeCopy[idx].points = 0;
      }
      charSheetCopy.sp = curlvl + (curlvl - 1);
      charSheetCopy.statpoints = 15 + (curlvl - 1) * 2;
      charSheetCopy.con = 5;
      charSheetCopy.str = 5;
      charSheetCopy.dex = 5;
      charSheetCopy.int = 5;
      charSheetCopy.wis = 5;
      charSheetCopy.char = 5;
      this.setState({ skilltree: skilltreeCopy });
      this.setState({ charSheet: charSheetCopy });
    }
    this.setState({ charSheet: charSheetCopy });
  };

  getModFromCharSheet = statType => {
    return Math.floor((this.getTotalStat(statType) - 10) / 2);
  };

  getStatMods = statType => {
    let modsum = 0;
    for (let idx in this.props.itemslist) {
      if (this.props.itemslist[idx].equipped) {
        let curStat = statType.toLowerCase();
        for (let idx2 in this.props.itemslist[idx].statmod) {
          if (curStat === this.props.itemslist[idx].statmod[idx2].stat) {
            modsum += this.props.itemslist[idx].statmod[idx2].value;
          }
        }
      }
    }
    return modsum;
  };

  getTotalStat = statType => {
    let curStat = CharSheetUtils.getStatFromCharSheet(
      this.props.charSheet,
      statType
    );
    let modsum = this.getStatMods(statType);

    return curStat + modsum;
  };
  render() {
    return (
      <div
        className="no-gutters"
        style={{ display: this.props.show ? "block" : "none" }}
        id="stats-title"
      >
        <div className="row no-gutters" id="level-title">
          <h3>
            <br />
            <div className="input-group">
              XP:&nbsp;
              <input
                type="text"
                defaultValue={this.props.charSheet.xp}
                style={{ width: 100 }}
                className="form-control"
                onBlur={this.handleXpUpdate}
                ref={this.inputXpRef}
              ></input>
              &nbsp;(Level:{" "}
              {CharSheetUtils.getLevelFromXP(this.props.charSheet)})
            </div>
          </h3>
        </div>
        <small className="text-muted">
          Leveling down will reset the skill tree and stat points!
        </small>
        <br />
        <br />
        <h6>
          Stat Points:{" "}
          <span
            className={
              this.props.charSheet.statpoints > 0
                ? "badge badge-primary"
                : "badge badge-danger"
            }
          >
            {this.props.charSheet.statpoints}
          </span>
        </h6>
        <br />
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              <th></th>
              <th>Bonus</th>
              <th>Total</th>
              <th>Roll</th>
            </tr>
          </thead>
          <tbody>
            {this.state.statsList.map(stat => (
              <tr key={stat + "div-row"}>
                <td>{stat}</td>
                <td>
                  <StatBlock
                    charSheet={this.props.charSheet}
                    dataCallBack={this.handleIncrement}
                    statType={stat}
                    lastStatUpdate={this.props.lastStatUpdate}
                    key={stat}
                  />
                </td>
                <td>
                  <RoStatBlock
                    key={stat + "-bonus"}
                    statType={stat}
                    value={this.getStatMods(stat)}
                  />
                </td>
                <td>
                  <RoStatBlock
                    key={stat + "-total"}
                    statType={stat}
                    value={this.getTotalStat(stat)}
                  />
                </td>
                <td>
                  <RoStatBlock
                    statType={stat}
                    key={stat + "-rolls"}
                    value={this.getModFromCharSheet(stat)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*
        <div className="row no-gutters" id="stats">
          <div className="col no-gutters" id="stats-title">
            <h2>Stats</h2>
            <div className="row no-gutters">
              <div className="col no-gutters" id="stat-block">
                {this.state.statsList.map(stat => (
                  <div
                    className="row no-gutters"
                    id="stat-row"
                    key={stat + "div-row"}
                  >
                    <div className="col-4">{stat}</div>
                    <div className="col-6 input-group">
                      <StatBlock
                        charSheet={this.props.charSheet}
                        dataCallBack={this.handleIncrement}
                        statType={stat}
                        key={stat}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col no-gutters" id="stats-bonus">
            <h2>Rolls</h2>
            <div className="col no-gutters" id="stat-block">
              {this.state.statsList.map(stat => (
                <div
                  className="row no-gutters"
                  id="stat-row"
                  key={stat + "div-row-rolls"}
                >
                  <div className="col-3 input-group">
                    <RoStatBlock
                      charSheet={this.props.charSheet}
                      statType={stat}
                      key={stat + "-rolls"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col no-gutters" id="stats-bonus">
            <h2>Bonus</h2>
            <div className="col no-gutters" id="stat-block">
              {this.state.statsList.map(stat => (
                <div
                  className="row no-gutters"
                  id="stat-row"
                  key={stat + "div-row-bonus"}
                >
                  <div className="col-3 input-group">
                    <RoStatBlock key={stat + "-bonus"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default CharSheetPage;
