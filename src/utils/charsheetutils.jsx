import { Component } from "react";
class CharSheetUtils extends Component {
  state = {};
  render() {
    return 0;
  }

  static getStatFromCharSheet(charSheet, statType) {
    if (statType === "STR") return +charSheet.str;
    if (statType === "INT") return +charSheet.int;
    if (statType === "DEX") return +charSheet.dex;
    if (statType === "WIS") return +charSheet.wis;
    if (statType === "CON") return +charSheet.con;
    if (statType === "CHA") return +charSheet.cha;
  }

  static showClass(charSheet) {
    let classtext = "";
    for (let idx in charSheet.class) {
      if (classtext !== "") classtext += "/";
      classtext +=
        charSheet.class[idx].charAt(0).toUpperCase() +
        charSheet.class[idx].slice(1);
    }
    if (classtext === "") return "Assign first skill";
    else return classtext;
  }

  static getLevelFromXP(charSheet) {
    //Build level list xp until lvl99
    let maxlevel = 99;
    let levelsTable = [];
    levelsTable[0] = 0;
    levelsTable[1] = 0;
    levelsTable[2] = 1000;
    let i;
    for (i = 3; i <= maxlevel; i++) {
      levelsTable[i] =
        levelsTable[i - 1] + (levelsTable[i - 1] - levelsTable[i - 2]) + 1000;
    }

    //Get the nearest xp for the next level and return lvl before that (current level)
    let levelidx = levelsTable.filter(lvl => lvl > charSheet.xp);
    let level = levelsTable.indexOf(levelidx[0]) - 1;

    if (level < 1) return maxlevel;
    else return levelsTable.indexOf(levelidx[0]) - 1;
  }
}

export default CharSheetUtils;
