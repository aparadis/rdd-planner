import React from "react";
import SkillsPage from "./skillspage";
import { removePropertiesDeep } from "@babel/types";

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
    modtext += " +" + props.mod[idx].value;
  }

  for (var idxstat in props.statmod) {
    if (modtext) modtext += ", ";
    modtext +=
      props.statmod[idxstat].stat.toUpperCase() +
      "+" +
      props.statmod[idxstat].value;
  }

  return modtext;
};

export default ItemModsLabel;
