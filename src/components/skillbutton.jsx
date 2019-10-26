import React, { Component } from "react";

class SkillButton extends Component {
  state = { activestate: "" };

  checkIfActive = () => {
    if (this.props.checkAllSkillDeps(this.props.skilltreeindex)) return true;
    else return false;
  };

  render() {
    return (
      <button
        className={
          this.checkIfActive()
            ? "btn btn-sm btn-primary"
            : "btn btn-sm btn-secondary"
        }
        onClick={() => this.props.handleSkillPoint(this.props.skilltreeindex)}
      >
        +
      </button>
    );
  }
}

export default SkillButton;
