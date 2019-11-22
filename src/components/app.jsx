import React, { Component } from "react";
import CharSheetPage from "./charsheetpage";
import CharSheetUtils from "../utils/charsheetutils";
import ItemsPage from "./itemspage";
import SkillsPage from "./skillspage";
import { Nav } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    let curlvl = CharSheetUtils.getLevelFromXP(this.state.charSheet);
    this.state.charSheet.sp = curlvl + (curlvl - 1);
    this.state.charSheet.statpoints = 15 + (curlvl - 1) * 2;
  }
  state = {
    count: 0,
    statsList: ["CON", "STR", "DEX", "INT", "WIS", "CHA"],
    classesmod: {
      fighter: { hp: 10, mana: 0 },
      cleric: { hp: 8, mana: 2 },
      mage: { hp: 4, mana: 10 },
      rogue: { hp: 8, mana: 0 }
    },
    prestigeclass: [
      {
        name: "warrior",
        skilltreeid: 47,
        skilltreeclass: ["fighter"],
        skillmod: [
          { skilltreeid: 41, value: 4 },
          { skilltreeid: 45, value: 2 }
        ],
        statmod: [
          { stat: "str", value: 2 },
          { stat: "dex", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "priest",
        skilltreeid: 82,
        skilltreeclass: ["cleric"],
        skillmod: [
          { skilltreeid: 70, value: 4 },
          { skilltreeid: 73, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "wizard",
        skilltreeid: 26,
        skilltreeclass: ["mage"],
        skillmod: [
          { skilltreeid: 23, value: 4 },
          { skilltreeid: 2, value: 2 }
        ],
        statmod: [
          { stat: "wis", value: 2 },
          { stat: "int", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "thief",
        skilltreeid: 114,
        skilltreeclass: ["rogue"],
        skillmod: [
          { skilltreeid: 110, value: 4 },
          { skilltreeid: 107, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "dex", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "paladin",
        skilltreeid: 75,
        skilltreeclass: ["fighter", "cleric"],
        skillmod: [
          { skilltreeid: 92, value: 4 },
          { skilltreeid: 70, value: 2 }
        ],
        statmod: [
          { stat: "str", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "enchanter",
        skilltreeid: 32,
        skilltreeclass: ["fighter", "mage"],
        skillmod: [
          { skilltreeid: 28, value: 4 },
          { skilltreeid: 25, value: 2 }
        ],
        statmod: [
          { stat: "str", value: 2 },
          { stat: "int", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "monk",
        skilltreeid: 121,
        skilltreeclass: ["fighter", "rogue"],
        skillmod: [
          { skilltreeid: 103, value: 4 },
          { skilltreeid: 109, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "dex", value: 2 },
          { stat: "wis", value: 2 }
        ]
      },
      {
        name: "alchemist",
        skilltreeid: 31,
        skilltreeclass: ["cleric", "mage"],
        skillmod: [
          { skilltreeid: 22, value: 4 },
          { skilltreeid: 24, value: 2 }
        ],
        statmod: [
          { stat: "dex", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "bard",
        skilltreeid: 117,
        skilltreeclass: ["cleric", "rogue"],
        skillmod: [
          { skilltreeid: 87, value: 4 },
          { skilltreeid: 112, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "dex", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "mechanic",
        skilltreeid: 128,
        skilltreeclass: ["mage", "rogue"],
        skillmod: [
          { skilltreeid: 115, value: 4 },
          { skilltreeid: 3, value: 2 }
        ],
        statmod: [
          { stat: "str", value: 2 },
          { stat: "dex", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "barbarian",
        skilltreeid: 60,
        skilltreeclass: ["fighter"],
        skillmod: [
          { skilltreeid: 59, value: 4 },
          { skilltreeid: 57, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "str", value: 2 },
          { stat: "dex", value: 2 }
        ]
      },
      {
        name: "summoner",
        skilltreeid: 78,
        skilltreeclass: ["cleric"],
        skillmod: [
          { skilltreeid: 67, value: 4 },
          { skilltreeid: 71, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "sorcerer",
        skilltreeid: 27,
        skilltreeclass: ["mage"],
        skillmod: [
          { skilltreeid: 1, value: 4 },
          { skilltreeid: 23, value: 2 }
        ],
        statmod: [
          { stat: "str", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "assassin",
        skilltreeid: 125,
        skilltreeclass: ["rogue"],
        skillmod: [
          { skilltreeid: 22, value: 4 },
          { skilltreeid: 24, value: 2 }
        ],
        statmod: [
          { stat: "dex", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "dark knight",
        skilltreeid: 80,
        skilltreeclass: ["fighter", "cleric"],
        skillmod: [
          { skilltreeid: 64, value: 4 },
          { skilltreeid: 68, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "str", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "warlock",
        skilltreeid: 18,
        skilltreeclass: ["fighter", "mage"],
        skillmod: [
          { skilltreeid: 4, value: 4 },
          { skilltreeid: 14, value: 2 }
        ],
        statmod: [
          { stat: "con", value: 2 },
          { stat: "str", value: 2 },
          { stat: "int", value: 2 }
        ]
      },
      {
        name: "ninja",
        skilltreeid: 118,
        skilltreeclass: ["fighter", "rogue"],
        skillmod: [
          { skilltreeid: 99, value: 4 },
          { skilltreeid: 101, value: 2 }
        ],
        statmod: [
          { stat: "str", value: 2 },
          { stat: "dex", value: 2 },
          { stat: "wis", value: 2 }
        ]
      },
      {
        name: "necromancer",
        skilltreeid: 85,
        skilltreeclass: ["cleric", "mage"],
        skillmod: [
          { skilltreeid: 79, value: 4 },
          { skilltreeid: 22, value: 2 }
        ],
        statmod: [
          { stat: "wis", value: 2 },
          { stat: "int", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "shaman",
        skilltreeid: 94,
        skilltreeclass: ["cleric", "rogue"],
        skillmod: [
          { skilltreeid: 93, value: 4 },
          { skilltreeid: 57, value: 2 }
        ],
        statmod: [
          { stat: "dex", value: 2 },
          { stat: "wis", value: 2 },
          { stat: "cha", value: 2 }
        ]
      },
      {
        name: "illusionist",
        skilltreeid: 19,
        skilltreeclass: ["mage", "rogue"],
        skillmod: [
          { skilltreeid: 116, value: 4 },
          { skilltreeid: 12, value: 2 }
        ],
        statmod: [
          { stat: "dex", value: 2 },
          { stat: "int", value: 2 },
          { stat: "cha", value: 2 }
        ]
      }
    ],
    racesmod: {
      human: [
        { skilltreeid: 62, value: 1 },
        { skilltreeid: 3, value: 2 },
        { skilltreeid: 40, value: 2 },
        { skilltreeid: 88, value: 2 },
        { skilltreeid: 114, value: 5 }
      ],
      elf: [
        { skilltreeid: 37, value: 1 },
        { skilltreeid: 98, value: 2 },
        { skilltreeid: 101, value: 2 },
        { skilltreeid: 24, value: 1 },
        { skilltreeid: 124, value: 1 }
      ],
      dwarf: [
        { skilltreeid: 57, value: 1 },
        { skilltreeid: 111, value: 3 },
        { skilltreeid: 91, value: 1 },
        { skilltreeid: 44, value: 1 },
        { skilltreeid: 119, value: 1 }
      ],
      hobbit: [
        { skilltreeid: 104, value: 1 },
        { skilltreeid: 89, value: 1 },
        { skilltreeid: 107, value: 1 },
        { skilltreeid: 108, value: 1 }
      ],
      orc: [
        { skilltreeid: 38, value: 1 },
        { skilltreeid: 53, value: 1 },
        { skilltreeid: 58, value: 1 },
        { skilltreeid: 59, value: 1 },
        { skilltreeid: 60, value: 1 }
      ],
      drow: [
        { skilltreeid: 63, value: 1 },
        { skilltreeid: 82, value: 1 },
        { skilltreeid: 101, value: 1 },
        { skilltreeid: 68, value: 1 },
        { skilltreeid: 109, value: 1 }
      ],
      troll: [
        { skilltreeid: 56, value: 1 },
        { skilltreeid: 93, value: 2 },
        { skilltreeid: 115, value: 2 }
      ],
      gnome: [
        { skilltreeid: 28, value: 4 },
        { skilltreeid: 19, value: 1 },
        { skilltreeid: 31, value: 1 },
        { skilltreeid: 128, value: 1 },
        { skilltreeid: 32, value: 1 }
      ]
    },
    gendermod: {
      female: [
        { stat: "dex", value: 1 },
        { stat: "wis", value: 1 },
        { stat: "con", value: -1 },
        { stat: "str", value: -1 }
      ],
      male: [
        { stat: "dex", value: -1 },
        { stat: "wis", value: -1 },
        { stat: "con", value: 1 },
        { stat: "str", value: 1 }
      ]
    },
    charSheet: {
      xp: 300000,
      lastxp: 0,
      con: 5,
      str: 5,
      dex: 5,
      int: 5,
      wis: 5,
      cha: 5,
      statpoints: 0,
      lastStatUpdate: "",
      sp: 0,
      race: "",
      class: [],
      gender: "male",
      specialPower: ""
    },
    itemslist: [
      {
        itemid: 1,
        itemname: "Stick of Clue",
        equipslot: "hand",
        equipped: true,
        mod: [
          { skilltreeid: 1, value: 2 },
          { skilltreeid: 3, value: 4 }
        ],
        statmod: [
          { stat: "wis", value: -1 },
          { stat: "int", value: 1 }
        ]
      },
      {
        itemid: 2,
        itemname: "Boots of Greater Fiyaaa",
        equipslot: "feet",
        equipped: true,
        mod: [
          { skilltreeid: 1, value: 3 },
          { skilltreeid: 7, value: 4 },
          { skilltreeid: 10, value: 2 }
        ],
        statmod: []
      },
      {
        itemid: 3,
        itemname: "Gloves of Numb Fingers",
        equipslot: "wrist",
        equipped: true,
        mod: [
          { skilltreeid: 1, value: 3 },
          { skilltreeid: 6, value: 4 }
        ],
        statmod: []
      }
    ],
    skilltree: [
      /*Mage skills*/
      {
        id: 1,
        name: "cast",
        label: "Cast",
        points: 0,
        level: 1,
        depends: 0,
        class: "mage"
      },
      {
        id: 2,
        name: "wand",
        label: "Wand",
        points: 0,
        level: 1,
        depends: 0,
        class: "mage"
      },
      {
        id: 3,
        name: "knowledge",
        label: "Knowledge",
        points: 0,
        level: 1,
        depends: 0,
        class: "mage"
      },
      {
        id: 4,
        name: "fire",
        label: "Fire",
        points: 0,
        level: 3,
        depends: 1,
        class: "mage"
      },
      {
        id: 5,
        name: "lightning",
        label: "Lightning",
        points: 0,
        level: 3,
        depends: 1,
        class: "mage"
      },
      {
        id: 6,
        name: "ice",
        label: "Ice",
        points: 0,
        level: 3,
        depends: 1,
        class: "mage"
      },
      {
        id: 7,
        name: "fireball",
        label: "Fireball",
        points: 0,
        level: 5,
        depends: 4,
        class: "mage"
      },
      {
        id: 8,
        name: "levitate",
        label: "Levitate",
        points: 0,
        level: 5,
        depends: 5,
        class: "mage"
      },
      {
        id: 9,
        name: "ice_armor",
        label: "Ice Armor",
        points: 0,
        level: 5,
        depends: 6,
        class: "mage"
      },
      {
        id: 10,
        name: "burn",
        label: "Burn",
        points: 0,
        level: 10,
        depends: 7,
        class: "mage"
      },
      {
        id: 11,
        name: "storm",
        label: "Storm",
        points: 0,
        level: 10,
        depends: 5,
        class: "mage"
      },
      {
        id: 12,
        name: "teleport",
        label: "Teleport",
        points: 0,
        level: 10,
        depends: 8,
        class: "mage"
      },
      {
        id: 13,
        name: "ice_shield",
        label: "Ice Shield",
        points: 0,
        level: 10,
        depends: 9,
        class: "mage"
      },
      {
        id: 14,
        name: "lava_blood",
        label: "Lava Blood",
        points: 0,
        level: 15,
        depends: 10,
        class: "mage"
      },
      {
        id: 15,
        name: "counter",
        label: "Counter",
        points: 0,
        level: 15,
        depends: 11,
        class: "mage"
      },
      {
        id: 16,
        name: "portal",
        label: "Portal",
        points: 0,
        level: 15,
        depends: 12,
        class: "mage"
      },
      {
        id: 17,
        name: "freeze",
        label: "Freeze",
        points: 0,
        level: 15,
        depends: 13,
        class: "mage"
      },
      {
        id: 18,
        name: "demon",
        label: "Demon",
        points: 0,
        level: 20,
        depends: 14,
        class: "mage"
      },
      {
        id: 19,
        name: "illusion",
        label: "Illusion",
        points: 0,
        level: 20,
        depends: 16,
        class: "mage"
      },
      {
        id: 20,
        name: "blizzard",
        label: "Blizzard",
        points: 0,
        level: 20,
        depends: 17,
        class: "mage"
      },
      {
        id: 22,
        name: "research",
        label: "Research",
        points: 0,
        level: 3,
        depends: 3,
        class: "mage"
      },
      {
        id: 23,
        name: "sharp_mind",
        label: "Sharp Mind",
        points: 0,
        level: 5,
        depends: 3,
        class: "mage"
      },
      {
        id: 24,
        name: "herbalism",
        label: "Herbalism",
        points: 0,
        level: 5,
        depends: 22,
        class: "mage"
      },
      {
        id: 25,
        name: "decipher",
        label: "Decipher",
        points: 0,
        level: 5,
        depends: 22,
        class: "mage"
      },
      {
        id: 26,
        name: "energy",
        label: "Energy",
        points: 0,
        level: 10,
        depends: 23,
        class: "mage"
      },
      {
        id: 27,
        name: "elemental",
        label: "Elemental",
        points: 0,
        level: 10,
        depends: 23,
        class: "mage"
      },
      {
        id: 28,
        name: "identify",
        label: "Identify",
        points: 0,
        level: 10,
        depends: 25,
        class: "mage"
      },
      {
        id: 29,
        name: "osmose",
        label: "Osmose",
        points: 0,
        level: 15,
        depends: 26,
        class: "mage"
      },
      {
        id: 30,
        name: "blood",
        label: "Blood",
        points: 0,
        level: 15,
        depends: 27,
        class: "mage"
      },
      {
        id: 31,
        name: "alchemy",
        label: "Alchemy",
        points: 0,
        level: 15,
        depends: 24,
        class: "mage"
      },
      {
        id: 32,
        name: "enchant",
        label: "Enchant",
        points: 0,
        level: 15,
        depends: 28,
        class: "mage"
      },
      {
        id: 33,
        name: "forcefield",
        label: "Forcefield",
        points: 0,
        level: 20,
        depends: 29,
        class: "mage"
      },
      {
        id: 34,
        name: "disenchant",
        label: "Disenchant",
        points: 0,
        level: 20,
        depends: 32,
        class: "mage"
      },
      {
        id: 35,
        name: "hammer",
        label: "Hammer",
        points: 0,
        level: 1,
        depends: 0,
        class: "fighter"
      },
      {
        id: 36,
        name: "sword",
        label: "Sword",
        points: 0,
        level: 1,
        depends: 0,
        class: "fighter"
      },
      {
        id: 37,
        name: "archery",
        label: "Archery",
        points: 0,
        level: 1,
        depends: 0,
        class: "fighter"
      },
      {
        id: 38,
        name: "axe",
        label: "Axe",
        points: 0,
        level: 3,
        depends: 35,
        class: "fighter"
      },
      {
        id: 39,
        name: "spear",
        label: "Spear",
        points: 0,
        level: 3,
        depends: 36,
        class: "fighter"
      },
      {
        id: 40,
        name: "hunt",
        label: "Hunt",
        points: 0,
        level: 3,
        depends: 37,
        class: "fighter"
      },
      {
        id: 41,
        name: "melee",
        label: "Melee",
        points: 0,
        level: 5,
        depends: 39,
        class: "fighter"
      },
      {
        id: 42,
        name: "track",
        label: "Track",
        points: 0,
        level: 5,
        depends: 40,
        class: "fighter"
      },
      {
        id: 43,
        name: "aim",
        label: "Aim",
        points: 0,
        level: 5,
        depends: 37,
        class: "fighter"
      },
      {
        id: 44,
        name: "mine",
        label: "Mine",
        points: 0,
        level: 10,
        depends: 38,
        class: "fighter"
      },
      {
        id: 45,
        name: "injure",
        label: "Injure",
        points: 0,
        level: 10,
        depends: 41,
        class: "fighter"
      },
      {
        id: 46,
        name: "pierce",
        label: "Pierce",
        points: 0,
        level: 10,
        depends: 43,
        class: "fighter"
      },
      {
        id: 47,
        name: "cleave",
        label: "Cleave",
        points: 0,
        level: 15,
        depends: 45,
        class: "fighter"
      },
      {
        id: 48,
        name: "stun",
        label: "Stun",
        points: 0,
        level: 15,
        depends: 45,
        class: "fighter"
      },
      {
        id: 49,
        name: "stack",
        label: "Stack",
        points: 0,
        level: 15,
        depends: 46,
        class: "fighter"
      },
      {
        id: 50,
        name: "smith",
        label: "Smith",
        points: 0,
        level: 20,
        depends: 47,
        class: "fighter"
      },
      {
        id: 51,
        name: "volley",
        label: "Volley",
        points: 0,
        level: 20,
        depends: 49,
        class: "fighter"
      },
      {
        id: 52,
        name: "defend",
        label: "Defend",
        points: 0,
        level: 1,
        depends: 0,
        class: "fighter"
      },
      {
        id: 53,
        name: "provoke",
        label: "Provoke",
        points: 0,
        level: 3,
        depends: 52,
        class: "fighter"
      },
      {
        id: 54,
        name: "vitality",
        label: "Vitality",
        points: 0,
        level: 3,
        depends: 52,
        class: "fighter"
      },
      {
        id: 55,
        name: "shield",
        label: "Shield",
        points: 0,
        level: 3,
        depends: 52,
        class: "fighter"
      },
      {
        id: 56,
        name: "iron_body",
        label: "Iron Body",
        points: 0,
        level: 5,
        depends: 54,
        class: "fighter"
      },
      {
        id: 57,
        name: "health",
        label: "Health",
        points: 0,
        level: 5,
        depends: 54,
        class: "fighter"
      },
      {
        id: 58,
        name: "bash",
        label: "Bash",
        points: 0,
        level: 5,
        depends: 55,
        class: "fighter"
      },
      {
        id: 59,
        name: "intimidate",
        label: "Intimidate",
        points: 0,
        level: 10,
        depends: 53,
        class: "fighter"
      },
      {
        id: 60,
        name: "berserk",
        label: "Berserk",
        points: 0,
        level: 15,
        depends: [59, 56],
        class: "fighter"
      },
      {
        id: 61,
        name: "die_hard",
        label: "Die Hard",
        points: 0,
        level: 20,
        depends: 60,
        class: "fighter"
      },
      {
        id: 62,
        name: "aid",
        label: "Aid",
        points: 0,
        level: 1,
        depends: 0,
        class: "cleric"
      },
      {
        id: 63,
        name: "pray",
        label: "Pray",
        points: 0,
        level: 1,
        depends: 0,
        class: "cleric"
      },
      {
        id: 64,
        name: "war",
        label: "War",
        points: 0,
        level: 1,
        depends: 0,
        class: "cleric"
      },
      {
        id: 65,
        name: "heal",
        label: "Heal",
        points: 0,
        level: 3,
        depends: 62,
        class: "cleric"
      },
      {
        id: 66,
        name: "light",
        label: "Light",
        points: 0,
        level: 3,
        depends: 63,
        class: "cleric"
      },
      {
        id: 67,
        name: "water",
        label: "Water",
        points: 0,
        level: 3,
        depends: 63,
        class: "cleric"
      },
      {
        id: 68,
        name: "dark",
        label: "Dark",
        points: 0,
        level: 3,
        depends: 63,
        class: "cleric"
      },
      {
        id: 69,
        name: "bless",
        label: "Bless",
        points: 0,
        level: 5,
        depends: 66,
        class: "cleric"
      },
      {
        id: 70,
        name: "cure",
        label: "Cure",
        points: 0,
        level: 5,
        depends: [66, 67],
        class: "cleric"
      },
      {
        id: 71,
        name: "rain",
        label: "Rain",
        points: 0,
        level: 5,
        depends: 67,
        class: "cleric"
      },
      {
        id: 72,
        name: "curse",
        label: "Curse",
        points: 0,
        level: 5,
        depends: 68,
        class: "cleric"
      },
      {
        id: 73,
        name: "banish",
        label: "Banish",
        points: 0,
        level: 10,
        depends: 69,
        class: "cleric"
      },
      {
        id: 74,
        name: "dispel",
        label: "Dispel",
        points: 0,
        level: 10,
        depends: 72,
        class: "cleric"
      },
      {
        id: 75,
        name: "flame",
        label: "Flame",
        points: 0,
        level: 15,
        depends: 69,
        class: "cleric"
      },
      {
        id: 76,
        name: "exorcism",
        label: "Exorcism",
        points: 0,
        level: 15,
        depends: 73,
        class: "cleric"
      },
      {
        id: 77,
        name: "mass_cure",
        label: "Mass Cure",
        points: 0,
        level: 15,
        depends: 70,
        class: "cleric"
      },
      {
        id: 78,
        name: "summon",
        label: "Summon",
        points: 0,
        level: 15,
        depends: 71,
        class: "cleric"
      },
      {
        id: 79,
        name: "raise",
        label: "Raise",
        points: 0,
        level: 15,
        depends: 74,
        class: "cleric"
      },
      {
        id: 80,
        name: "leech",
        label: "Leech",
        points: 0,
        level: 15,
        depends: 74,
        class: "cleric"
      },
      {
        id: 81,
        name: "aura",
        label: "Aura",
        points: 0,
        level: 20,
        depends: 75,
        class: "cleric"
      },
      {
        id: 82,
        name: "holy",
        label: "Holy",
        points: 0,
        level: 20,
        depends: 76,
        class: "cleric"
      },
      {
        id: 83,
        name: "regen",
        label: "Regen",
        points: 0,
        level: 20,
        depends: 77,
        class: "cleric"
      },
      {
        id: 84,
        name: "acid_rain",
        label: "Acid Rain",
        points: 0,
        level: 20,
        depends: 78,
        class: "cleric"
      },
      {
        id: 85,
        name: "necromancy",
        label: "Necromancy",
        points: 0,
        level: 20,
        depends: 79,
        class: "cleric"
      },
      {
        id: 86,
        name: "force",
        label: "Force",
        points: 0,
        level: 20,
        depends: 80,
        class: "cleric"
      },
      {
        id: 87,
        name: "lore",
        label: "Lore",
        points: 0,
        level: 1,
        depends: 0,
        class: "cleric"
      },
      {
        id: 88,
        name: "forage",
        label: "Forage",
        points: 0,
        level: 3,
        depends: 87,
        class: "cleric"
      },
      {
        id: 89,
        name: "cook",
        label: "Cook",
        points: 0,
        level: 5,
        depends: 88,
        class: "cleric"
      },
      {
        id: 90,
        name: "perceive",
        label: "Perceive",
        points: 0,
        level: 5,
        depends: 87,
        class: "cleric"
      },
      {
        id: 91,
        name: "brew",
        label: "Brew",
        points: 0,
        level: 10,
        depends: 89,
        class: "cleric"
      },
      {
        id: 92,
        name: "iron_will",
        label: "Iron Will",
        points: 0,
        level: 10,
        depends: 90,
        class: "cleric"
      },
      {
        id: 93,
        name: "meditate",
        label: "Meditate",
        points: 0,
        level: 15,
        depends: 92,
        class: "cleric"
      },
      {
        id: 94,
        name: "trinket",
        label: "Trinket",
        points: 0,
        level: 20,
        depends: 93,
        class: "cleric"
      },
      {
        id: 95,
        name: "climb",
        label: "Climb",
        points: 0,
        level: 1,
        depends: 0,
        class: "rogue"
      },
      {
        id: 96,
        name: "hide",
        label: "Hide",
        points: 0,
        level: 1,
        depends: 0,
        class: "rogue"
      },
      {
        id: 97,
        name: "knife",
        label: "Knife",
        points: 0,
        level: 1,
        depends: 0,
        class: "rogue"
      },
      {
        id: 98,
        name: "listen",
        label: "Listen",
        points: 0,
        level: 1,
        depends: 0,
        class: "rogue"
      },
      {
        id: 99,
        name: "jump",
        label: "Jump",
        points: 0,
        level: 3,
        depends: 95,
        class: "rogue"
      },
      {
        id: 101,
        name: "sneak",
        label: "Sneak",
        points: 0,
        level: 3,
        depends: 96,
        class: "rogue"
      },
      {
        id: 102,
        name: "shoot",
        label: "Shoot",
        points: 0,
        level: 3,
        depends: 97,
        class: "rogue"
      },
      {
        id: 103,
        name: "kendo",
        label: "Kendo",
        points: 0,
        level: 3,
        depends: 97,
        class: "rogue"
      },
      {
        id: 104,
        name: "search",
        label: "Search",
        points: 0,
        level: 3,
        depends: 98,
        class: "rogue"
      },
      {
        id: 105,
        name: "dodge",
        label: "Dodge",
        points: 0,
        level: 5,
        depends: 99,
        class: "rogue"
      },
      {
        id: 106,
        name: "stab",
        label: "Stab",
        points: 0,
        level: 5,
        depends: 101,
        class: "rogue"
      },
      {
        id: 107,
        name: "luck",
        label: "Luck",
        points: 0,
        level: 5,
        depends: 101,
        class: "rogue"
      },
      {
        id: 108,
        name: "fish",
        label: "Fish",
        points: 0,
        level: 5,
        depends: 102,
        class: "rogue"
      },
      {
        id: 109,
        name: "dual",
        label: "Dual",
        points: 0,
        level: 5,
        depends: 103,
        class: "rogue"
      },
      {
        id: 110,
        name: "unlock",
        label: "Unlock",
        points: 0,
        level: 5,
        depends: 104,
        class: "rogue"
      },
      {
        id: 111,
        name: "appraise",
        label: "Appraise",
        points: 0,
        level: 5,
        depends: 104,
        class: "rogue"
      },
      {
        id: 112,
        name: "seduce",
        label: "Seduce",
        points: 0,
        level: 5,
        depends: 104,
        class: "rogue"
      },
      {
        id: 113,
        name: "escape",
        label: "Escape",
        points: 0,
        level: 10,
        depends: 105,
        class: "rogue"
      },
      {
        id: 114,
        name: "steal",
        label: "Steal",
        points: 0,
        level: 10,
        depends: 107,
        class: "rogue"
      },
      {
        id: 115,
        name: "trap",
        label: "Trap",
        points: 0,
        level: 10,
        depends: 110,
        class: "rogue"
      },
      {
        id: 116,
        name: "bluff",
        label: "Bluff",
        points: 0,
        level: 10,
        depends: 111,
        class: "rogue"
      },
      {
        id: 117,
        name: "sing",
        label: "Sing",
        points: 0,
        level: 10,
        depends: 112,
        class: "rogue"
      },
      {
        id: 118,
        name: "ninjutsu",
        label: "Ninjutsu",
        points: 0,
        level: 15,
        depends: [113, 106],
        class: "rogue"
      },
      {
        id: 119,
        name: "gold",
        label: "Gold",
        points: 0,
        level: 15,
        depends: 114,
        class: "rogue"
      },
      {
        id: 120,
        name: "treasure",
        label: "Treasure",
        points: 0,
        level: 15,
        depends: [114, 108],
        class: "rogue"
      },
      {
        id: 121,
        name: "wushu",
        label: "Wushu",
        points: 0,
        level: 15,
        depends: 109,
        class: "rogue"
      },
      {
        id: 122,
        name: "forgery",
        label: "Forgery",
        points: 0,
        level: 15,
        depends: 115,
        class: "rogue"
      },
      {
        id: 123,
        name: "bargain",
        label: "Bargain",
        points: 0,
        level: 15,
        depends: 116,
        class: "rogue"
      },
      {
        id: 124,
        name: "music",
        label: "Music",
        points: 0,
        level: 15,
        depends: 117,
        class: "rogue"
      },
      {
        id: 125,
        name: "kill",
        label: "Kill",
        points: 0,
        level: 20,
        depends: 106,
        class: "rogue"
      },
      {
        id: 126,
        name: "loot",
        label: "Loot",
        points: 0,
        level: 20,
        depends: [119, 120],
        class: "rogue"
      },
      {
        id: 127,
        name: "catch",
        label: "Catch",
        points: 0,
        level: 20,
        depends: 121,
        class: "rogue"
      },
      {
        id: 128,
        name: "craft",
        label: "Craft",
        points: 0,
        level: 20,
        depends: 122,
        class: "rogue"
      }
    ],

    showCharSheetPage: 1,
    showItemsPage: 0,
    showSkillsPage: 0
  };

  showCharSheetPage = () => {
    this.setState({
      showCharSheetPage: 1,
      showItemsPage: 0,
      showSkillsPage: 0
    });
  };

  showItemsPage = () => {
    this.setState({
      showCharSheetPage: 0,
      showItemsPage: 1,
      showSkillsPage: 0
    });
  };

  showSkillsPage = () => {
    this.setState({
      showCharSheetPage: 0,
      showItemsPage: 0,
      showSkillsPage: 1
    });
  };

  loadState = () => {
    //https://api.jsonbin.io/b/5dbbaac6318745432d31136f
    //https://api.myjson.com/bins/t21ys
    this.showCharSheetPage();
    fetch("https://api.jsonbin.io/b/5dbcf55cf9f7965e778aa979/4")
      .then(response => response.json())
      .then(data => this.setState({ ...data }));
  };

  saveState = () => {
    console.log(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="container no-gutters" id="main">
        <div className="col no-gutters">
          <div className="row no-gutters" id="main-title">
            <h1>RDD Character Planner</h1>
          </div>
          <Nav
            style={{ background: "whitesmoke" }}
            variant="tabs"
            defaultActiveKey="#sheet"
          >
            <Nav.Item>
              <Nav.Link href="#sheet" onClick={this.showCharSheetPage}>
                Sheet
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#items" onClick={this.showItemsPage}>
                Items
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills" onClick={this.showSkillsPage}>
                Skills
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <CharSheetPage
            charSheet={this.state.charSheet}
            show={this.state.showCharSheetPage}
            skilltree={this.state.skilltree}
            lastStatUpdate={this.state.lastStatUpdate}
            itemslist={this.state.itemslist}
            gendermod={this.state.gendermod}
            prestigeclass={this.state.prestigeclass}
          />
          <ItemsPage
            charSheet={this.state.charSheet}
            show={this.state.showItemsPage}
            skilltree={this.state.skilltree}
            itemslist={this.state.itemslist}
          />
          <SkillsPage
            charSheet={this.state.charSheet}
            show={this.state.showSkillsPage}
            skilltree={this.state.skilltree}
            itemslist={this.state.itemslist}
            racesmod={this.state.racesmod}
            prestigeclass={this.state.prestigeclass}
          />
          <br />
          <button className="btn btn-primary" onClick={() => this.loadState()}>
            Reset from HTTP
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={() => this.saveState()}>
            Save state to console
          </button>
        </div>
      </div>
    );
  }
}

export default App;
