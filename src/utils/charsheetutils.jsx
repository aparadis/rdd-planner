import { Component } from "react";
class CharSheetUtils extends Component {
  state = {};
  render() {
    return 0;
  }

  static getStatFromCharSheet(charSheet, statType) {
    console.log("getStatFromCharSheet: " + statType);

    if (statType === "STR") return +charSheet.str;
    if (statType === "INT") return +charSheet.int;
    if (statType === "DEX") return +charSheet.dex;
    if (statType === "WIS") return +charSheet.wis;
    if (statType === "CON") return +charSheet.con;
    if (statType === "CHA") return +charSheet.cha;
  }

  static getLevelFromXP(charSheet) {
    //Build level list xp until lvl99
    let levelsTable = [];
    levelsTable[0] = 0;
    levelsTable[1] = 0;
    levelsTable[2] = 1000;
    let i;
    for (i = 3; i < 100; i++) {
      levelsTable[i] =
        levelsTable[i - 1] + (levelsTable[i - 1] - levelsTable[i - 2]) + 1000;
    }

    //Get the nearest xp for the next level and return lvl before that (current level)
    let level = levelsTable.filter(lvl => lvl > charSheet.xp);
    return levelsTable.indexOf(level[0]) - 1;
  }
}

export default CharSheetUtils;
