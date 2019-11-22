import React, { Component } from "react";
import StatBlock from "./statblock";
import RoStatBlock from "./ro-statblock";
import CharSheetUtils from "../utils/charsheetutils";
import ReactTooltip from "react-tooltip";

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

    //Check for prestige class bonuses
    let curclass = this.props.charSheet.class[0];
    let pclasses = this.props.prestigeclass.find(p => p.name === curclass);
    if (pclasses) {
      for (let idx in pclasses.statmod) {
        if (pclasses.statmod[idx].stat.toUpperCase() === statType) {
          console.log("prestige bonus", statType, pclasses.statmod[idx].value);
          modsum += pclasses.statmod[idx].value;
        }
      }
    }

    //Check for gender bonuses
    let gender = this.props.charSheet.gender;
    for (let idx in this.props.gendermod[gender]) {
      if (this.props.gendermod[gender][idx].stat.toUpperCase() === statType) {
        modsum += this.props.gendermod[gender][idx].value;
      }
    }

    //Check for item bonuses
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

  getStatModText = statType => {
    let modtext = "";

    //Check for prestige class bonuses
    let curclass = this.props.charSheet.class[0];
    let pclasses = this.props.prestigeclass.find(p => p.name === curclass);
    if (pclasses) {
      for (let idx in pclasses.statmod) {
        if (pclasses.statmod[idx].stat.toUpperCase() === statType) {
          if (modtext !== "") modtext += "<br>";
          modtext +=
            "Prestige: " +
            pclasses.name +
            " (" +
            pclasses.statmod[idx].value +
            ")";
        }
      }
    }

    //Check for gender bonuses
    let gender = this.props.charSheet.gender;
    for (let idx in this.props.gendermod[gender]) {
      if (this.props.gendermod[gender][idx].stat.toUpperCase() === statType) {
        if (modtext !== "") modtext += "<br>";
        modtext +=
          "Gender: " +
          gender +
          " (" +
          this.props.gendermod[gender][idx].value +
          ")";
      }
    }

    //Check for item bonuses
    for (let idx in this.props.itemslist) {
      for (let idx2 in this.props.itemslist[idx].statmod) {
        if (
          this.props.itemslist[idx].statmod[idx2].stat.toUpperCase() ===
            statType &&
          this.props.itemslist[idx].equipped
        ) {
          if (modtext !== "") modtext += "<br>";
          modtext +=
            this.props.itemslist[idx].itemname +
            " (" +
            this.props.itemslist[idx].statmod[idx2].value +
            ")" +
            "<br />";
        }
      }
    }
    return modtext;
  };

  getTotalStat = statType => {
    let curStat = CharSheetUtils.getStatFromCharSheet(
      this.props.charSheet,
      statType
    );
    let modsum = this.getStatMods(statType);

    return curStat + modsum;
  };

  handleRace = e => {
    let charSheetCopy = this.props.charSheet;
    charSheetCopy.race = e.target.value;
    switch (charSheetCopy.race) {
      case "human":
        charSheetCopy.sp += 2;
        break;
      case "elf":
        charSheetCopy.specialPower = "Darkvision";
        break;
      case "dwarf":
        charSheetCopy.statpoints += 2;
        break;
      case "hobbit":
        charSheetCopy.statpoints += 2;
        break;
      case "orc":
        charSheetCopy.statpoints += 2;
        break;
      case "drow":
        charSheetCopy.specialPower = "Darkvision";
        break;
      case "troll":
        charSheetCopy.specialPower = "Regeneration";
        break;
      case "gnome":
        charSheetCopy.statpoints += 2;
        break;
    }
    this.setState({ charSheet: charSheetCopy });
  };

  handleGender = e => {
    let charSheetCopy = this.props.charSheet;
    charSheetCopy.gender = e.target.value;
    this.setState({ charSheet: charSheetCopy });
  };

  showRace = () => {
    let race =
      this.props.charSheet.race.charAt(0).toUpperCase() +
      this.props.charSheet.race.slice(1);
    return race;
  };

  showPower = () => {
    let output = [];
    if (this.props.charSheet.specialPower) {
      output.push(<h6>Power:&nbsp;</h6>);
      output.push(<small>{this.props.charSheet.specialPower}</small>);
    }
    return <div className="input-group">{output}</div>;
  };

  showClass = () => {
    let classtext = "";
    for (let idx in this.props.charSheet.class) {
      if (classtext !== "") classtext += "/";
      classtext +=
        this.props.charSheet.class[idx].charAt(0).toUpperCase() +
        this.props.charSheet.class[idx].slice(1);
    }
    if (classtext === "")
      return <small className="text-muted">Assign first skill</small>;
    else return classtext;
  };

  render() {
    return (
      <div
        className="no-gutters"
        style={{ display: this.props.show ? "block" : "none" }}
        id="stats-title"
      >
        <div className="row no-gutters" id="level-title">
          <h4>
            <br />
            <div className="input-group">
              XP:&nbsp;
              <input
                type="text"
                defaultValue={this.props.charSheet.xp}
                style={{ width: 100 }}
                className="form-control form-control-sm"
                onBlur={this.handleXpUpdate}
                ref={this.inputXpRef}
              ></input>
              &nbsp;(Level:{" "}
              {CharSheetUtils.getLevelFromXP(this.props.charSheet)})
            </div>
          </h4>
        </div>
        <small className="text-muted">
          Leveling down will reset the skill tree and stat points!
        </small>
        <br />
        <br />
        <div className="input-group">
          <h4>
            Class:&nbsp;
            {CharSheetUtils.showClass(this.props.charSheet)}
          </h4>
        </div>
        <h4>
          <div className="input-group" style={{ width: 220 }}>
            Race:&nbsp;
            {this.props.charSheet.race === "" && (
              <select
                value={this.props.charSheet.race}
                onChange={this.handleRace}
                className="form-control form-control-sm"
                id="race-select"
              >
                <option value="">Select..</option>
                <option value="human">Human</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
                <option value="hobbit">Hobbit</option>
                <option value="orc">Orc</option>
                <option value="drow">Drow</option>
                <option value="troll">Troll</option>
                <option value="gnome">Gnome</option>
              </select>
            )}
            {this.showRace()}
          </div>
        </h4>
        {this.showPower()}
        <div className="input-group" style={{ width: 220 }}>
          <h4>Gender:&nbsp;</h4>
          <select
            value={this.props.charSheet.gender}
            onChange={this.handleGender}
            className="form-control form-control-sm"
            id="gender-select"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
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
                  <span data-tip={this.getStatModText(stat)}>
                    <ReactTooltip effect="solid" html={true} place="right" />
                    <RoStatBlock
                      key={stat + "-bonus"}
                      statType={stat}
                      value={this.getStatMods(stat)}
                    />
                  </span>
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
      </div>
    );
  }
}

export default CharSheetPage;
