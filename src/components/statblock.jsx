import React, { Component } from "react";
import CharSheetUtils from "../utils/charsheetutils";

class StatBlock extends Component {
  state = {
    count: 0,
    statType: ""
  };
  constructor(props) {
    super(props);
    //this.getStatFromCharSheet(this.props.statType);
    console.log("StatBlock: type: " + this.props.statType);
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          value={CharSheetUtils.getStatFromCharSheet(
            this.props.charSheet,
            this.props.statType
          )}
          className="form-control"
          onChange={this.handleStatUpdate}
        ></input>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm"
          style={{ marginLeft: 10 }}
        >
          +
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.props.dataCallBack(
      CharSheetUtils.getStatFromCharSheet(
        this.props.charSheet,
        this.props.statType
      ) + 1,
      this.props.statType
    );
    console.log(
      "handleIncrement: ch " +
        this.props.statType +
        " =" +
        (CharSheetUtils.getStatFromCharSheet(
          this.props.charSheet,
          this.props.statType
        ) +
          1)
    );
  };

  handleStatUpdate = e => {
    console.log(
      "Manual" + this.props.statType + " update to: " + e.target.value
    );
    this.props.dataCallBack(+e.target.value, this.props.statType);
  };
}

export default StatBlock;
