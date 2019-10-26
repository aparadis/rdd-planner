import React, { Component } from "react";

class RoStatBlock extends Component {
  state = {};
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.getModFromCharSheet(this.props.statType)}
          disabled
        ></input>
      </div>
    );
  }

  getModFromCharSheet(statType) {
    if (statType === "STR") {
      return Math.floor((this.props.charSheet.str - 10) / 2);
    }
    if (statType === "INT") {
      return Math.floor((this.props.charSheet.int - 10) / 2);
    }
    if (statType === "DEX") {
      return Math.floor((this.props.charSheet.dex - 10) / 2);
    }
    if (statType === "WIS") {
      return Math.floor((this.props.charSheet.wis - 10) / 2);
    }
    if (statType === "CON") {
      return Math.floor((this.props.charSheet.con - 10) / 2);
    }
    if (statType === "CHA") {
      return Math.floor((this.props.charSheet.cha - 10) / 2);
    }
  }
}

export default RoStatBlock;
