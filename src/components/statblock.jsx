import React, { Component } from "react";
import CharSheetUtils from "../utils/charsheetutils";

class StatBlock extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    let stat = CharSheetUtils.getStatFromCharSheet(
      this.props.charSheet,
      this.props.statType
    );
    if (this.inputRef.current.value != stat) {
      this.inputRef.current.value = stat;
    }
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          defaultValue={CharSheetUtils.getStatFromCharSheet(
            this.props.charSheet,
            this.props.statType
          )}
          style={{ width: 45 }}
          className="form-control"
          onBlur={this.handleStatUpdate}
          ref={this.inputRef}
        ></input>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm"
          style={{ marginLeft: 10, marginRight: 5 }}
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
  };

  handleStatUpdate = e => {
    this.props.dataCallBack(+e.target.value, this.props.statType);
  };
}

export default StatBlock;
