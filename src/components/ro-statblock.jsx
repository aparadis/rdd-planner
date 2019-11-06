import React, { Component } from "react";

class RoStatBlock extends Component {
  state = {};
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.props.value}
          style={{ width: 50 }}
          disabled
        ></input>
      </div>
    );
  }
}

export default RoStatBlock;
