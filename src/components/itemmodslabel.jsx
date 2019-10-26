import React from "react";
import SkillsPage from "./skillspage";

const ItemModsLabel = props => {
  return <>{concatMods(props)}</>;
};

const concatMods = props => {
  var modtext = "";

  for (var idx in props.mod) {
    if (idx > 0) modtext += ", ";
    modtext += SkillsPage.getSkillLabelbyId(
      props.skilltree,
      props.mod[idx].skilltreeid
    );
    modtext += " (" + props.mod[idx].value + ")";
  }

  return modtext;
};

export default ItemModsLabel;
