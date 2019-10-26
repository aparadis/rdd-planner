import React, { Component } from "react";
class SkillBlock extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th>
          <span
            data-toggle="tooltip"
            data-placement="top"
            title={this.props.skill.level}
          >
            {this.props.skill.name} ({this.props.skill.points})
          </span>
        </th>
        <th>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
            style={{ marginLeft: 10 }}
          >
            +
          </button>
        </th>
      </tr>
    );
  }
  handleIncrement = () => {
    this.props.dataCallBack(this.props.index);
  };
}

export default SkillBlock;
