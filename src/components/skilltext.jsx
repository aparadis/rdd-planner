import React from "react";
import ReactTooltip from "react-tooltip";
import SkillsPage from "./skillspage";

const SkillText = props => {
  return (
    <span data-tip={props.getSkillModText(props.skillname)}>
      <ReactTooltip effect="solid" html={true} />
      <span className="font-weight-light">{ShowLabel(props)}</span>
      &nbsp;
      <span className="badge badge-secondary">
        {props.getSkillPoints(props.skillname)}
      </span>
    </span>
  );
};

const ShowLabel = props => {
  let label = "";
  label = SkillsPage.getSkillLabelbyId(
    props.skilltree,
    props.getSkillId(props.skillname)
  );
  if (props.getSkillModText(props.skillname) !== "")
    return <b className="font-weight-bold text-primary">{label}</b>;
  return label;
};

export default SkillText;
