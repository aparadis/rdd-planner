import React, { Component } from "react";

class SkillButton extends Component {
  checkIfActive = () => {
    if (this.props.checkAllSkillDeps(this.props.skilltreeindex))
      return "btn btn-sm btn-primary";
    else if (!this.props.checkPrestigeSkill(this.props.skilltreeindex))
      return "btn btn-sm btn-danger";
    else return "btn btn-sm btn-secondary";
  };

  render() {
    return (
      <button
        className={this.checkIfActive()}
        onClick={() => this.props.handleSkillPoint(this.props.skilltreeindex)}
      >
        +
      </button>
    );
  }
}

export default SkillButton;
