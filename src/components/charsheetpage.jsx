import React, { Component } from "react";
import StatBlock from "./statblock";
import RoStatBlock from "./ro-statblock";
import CharSheetUtils from "../utils/charsheetutils";

class CharSheetPage extends Component {
  state = {
    statsList: ["CON", "STR", "DEX", "INT", "WIS", "CHA"]
  };

  handleIncrement = (data, statType) => {
    let charSheetCopy = this.props.charSheet;

    if (statType === "STR") charSheetCopy.str = data;
    if (statType === "INT") charSheetCopy.int = data;
    if (statType === "DEX") charSheetCopy.dex = data;
    if (statType === "WIS") charSheetCopy.wis = data;
    if (statType === "CON") charSheetCopy.con = data;
    if (statType === "CHA") charSheetCopy.cha = data;

    this.setState({ charSheet: charSheetCopy });
  };

  render() {
    return (
      <div
        className="no-gutters"
        style={{ display: this.props.show ? "block" : "none" }}
        id="stats-title"
      >
        <div className="row no-gutters" id="level-title">
          <h3 className="table">
            <br />
            XP: {this.props.charSheet.xp}
            &nbsp;(Level: {CharSheetUtils.getLevelFromXP(this.props.charSheet)})
          </h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Stats</th>
              <th></th>
              <th>Rolls</th>
              <th>Bonus</th>
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
                    key={stat}
                  />
                </td>
                <td>
                  <RoStatBlock
                    charSheet={this.props.charSheet}
                    statType={stat}
                    key={stat + "-rolls"}
                  />
                </td>
                <td>
                  <RoStatBlock key={stat + "-bonus"} />
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
