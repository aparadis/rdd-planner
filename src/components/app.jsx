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
    classList: ["cleric", "fighter", "mage", "rogue"],
    charSheet: {
      xp: 1,
      lastxp: 0,
      con: 5,
      str: 5,
      dex: 5,
      int: 5,
      wis: 5,
      cha: 5,
      statpoints: 0,
      lastStatUpdate: "",
      sp: 0
    },
    itemslist: [
      {
        itemid: 1,
        itemname: "Stick of Clue",
        equipslot: "weapon",
        equipped: false,
        mod: [{ skilltreeid: 1, value: 2 }, { skilltreeid: 3, value: 4 }]
      },
      {
        itemid: 2,
        itemname: "Boots of Greater Fiyaaa",
        equipslot: "boot",
        equipped: true,
        mod: [
          { skilltreeid: 1, value: 3 },
          { skilltreeid: 7, value: 4 },
          { skilltreeid: 10, value: 2 }
        ]
      },
      {
        itemid: 3,
        itemname: "Gloves of Numb Fingers",
        equipslot: "glove",
        equipped: true,
        mod: [{ skilltreeid: 1, value: 3 }, { skilltreeid: 6, value: 4 }]
      }
    ],
    skilltree: [
      /*Mage skills*/
      { id: 1, name: "cast", label: "Cast", points: 0, level: 1, depends: 0 },
      { id: 2, name: "wand", label: "Wand", points: 0, level: 1, depends: 0 },
      {
        id: 3,
        name: "knowledge",
        label: "Knowledge",
        points: 0,
        level: 1,
        depends: 0
      },
      { id: 4, name: "fire", label: "Fire", points: 0, level: 3, depends: 1 },
      {
        id: 5,
        name: "lightning",
        label: "Lightning",
        points: 0,
        level: 3,
        depends: 1
      },
      { id: 6, name: "ice", label: "Ice", points: 0, level: 3, depends: 1 },
      {
        id: 7,
        name: "fireball",
        label: "Fireball",
        points: 0,
        level: 5,
        depends: 4
      },
      {
        id: 8,
        name: "levitate",
        label: "Levitate",
        points: 0,
        level: 5,
        depends: 5
      },
      {
        id: 9,
        name: "ice_armor",
        label: "Ice Armor",
        points: 0,
        level: 5,
        depends: 6
      },
      { id: 10, name: "burn", label: "Burn", points: 0, level: 10, depends: 7 },
      {
        id: 11,
        name: "storm",
        label: "Storm",
        points: 0,
        level: 10,
        depends: 5
      },
      {
        id: 12,
        name: "teleport",
        label: "Teleport",
        points: 0,
        level: 10,
        depends: 8
      },
      {
        id: 13,
        name: "ice_shield",
        label: "Ice Shield",
        points: 0,
        level: 10,
        depends: 9
      },
      {
        id: 14,
        name: "lava_blood",
        label: "Lava Blood",
        points: 0,
        level: 15,
        depends: 10
      },
      {
        id: 15,
        name: "counter",
        label: "Counter",
        points: 0,
        level: 15,
        depends: 11
      },
      {
        id: 16,
        name: "portal",
        label: "Portal",
        points: 0,
        level: 15,
        depends: 12
      },
      {
        id: 17,
        name: "freeze",
        label: "Freeze",
        points: 0,
        level: 15,
        depends: 13
      },
      {
        id: 18,
        name: "demon",
        label: "Demon",
        points: 0,
        level: 20,
        depends: 14
      },
      {
        id: 19,
        name: "illusion",
        label: "Illusion",
        points: 0,
        level: 20,
        depends: 16
      },
      {
        id: 20,
        name: "blizzard",
        label: "Blizzard",
        points: 0,
        level: 20,
        depends: 17
      },
      {
        id: 22,
        name: "research",
        label: "Research",
        points: 0,
        level: 3,
        depends: 3
      },
      {
        id: 23,
        name: "sharp_mind",
        label: "Sharp Mind",
        points: 0,
        level: 5,
        depends: 3
      },
      {
        id: 24,
        name: "herbalism",
        label: "Herbalism",
        points: 0,
        level: 5,
        depends: 22
      },
      {
        id: 25,
        name: "decipher",
        label: "Decipher",
        points: 0,
        level: 5,
        depends: 22
      },
      {
        id: 26,
        name: "energy",
        label: "Energy",
        points: 0,
        level: 10,
        depends: 23
      },
      {
        id: 27,
        name: "elemental",
        label: "Elemental",
        points: 0,
        level: 10,
        depends: 23
      },
      {
        id: 28,
        name: "identify",
        label: "Identify",
        points: 0,
        level: 10,
        depends: 25
      },
      {
        id: 29,
        name: "osmose",
        label: "Osmose",
        points: 0,
        level: 15,
        depends: 26
      },
      {
        id: 30,
        name: "blood",
        label: "Blood",
        points: 0,
        level: 15,
        depends: 27
      },
      {
        id: 31,
        name: "alchemy",
        label: "Alchemy",
        points: 0,
        level: 15,
        depends: 24
      },
      {
        id: 32,
        name: "enchant",
        label: "Enchant",
        points: 0,
        level: 15,
        depends: 28
      },
      {
        id: 33,
        name: "forcefield",
        label: "Forcefield",
        points: 0,
        level: 20,
        depends: 29
      },
      {
        id: 34,
        name: "disenchant",
        label: "Disenchant",
        points: 0,
        level: 20,
        depends: 32
      },
      {
        id: 35,
        name: "hammer",
        label: "Hammer",
        points: 0,
        level: 1,
        depends: 0
      },
      {
        id: 36,
        name: "sword",
        label: "Sword",
        points: 0,
        level: 1,
        depends: 0
      },
      {
        id: 37,
        name: "archery",
        label: "Archery",
        points: 0,
        level: 1,
        depends: 0
      },
      { id: 38, name: "axe", label: "Axe", points: 0, level: 3, depends: 35 },
      {
        id: 39,
        name: "spear",
        label: "Spear",
        points: 0,
        level: 3,
        depends: 36
      },
      { id: 40, name: "hunt", label: "Hunt", points: 0, level: 3, depends: 37 },
      {
        id: 41,
        name: "melee",
        label: "Melee",
        points: 0,
        level: 5,
        depends: 39
      },
      {
        id: 42,
        name: "track",
        label: "Track",
        points: 0,
        level: 5,
        depends: 40
      },
      { id: 43, name: "aim", label: "Aim", points: 0, level: 5, depends: 37 },
      {
        id: 44,
        name: "mine",
        label: "Mine",
        points: 0,
        level: 10,
        depends: 38
      },
      {
        id: 45,
        name: "injure",
        label: "Injure",
        points: 0,
        level: 10,
        depends: 41
      },
      {
        id: 46,
        name: "pierce",
        label: "Pierce",
        points: 0,
        level: 10,
        depends: 43
      },
      {
        id: 47,
        name: "cleave",
        label: "Cleave",
        points: 0,
        level: 15,
        depends: 45
      },
      {
        id: 48,
        name: "stun",
        label: "Stun",
        points: 0,
        level: 15,
        depends: 45
      },
      {
        id: 49,
        name: "stack",
        label: "Stack",
        points: 0,
        level: 15,
        depends: 46
      },
      {
        id: 50,
        name: "smith",
        label: "Smith",
        points: 0,
        level: 20,
        depends: 47
      },
      {
        id: 51,
        name: "volley",
        label: "Volley",
        points: 0,
        level: 20,
        depends: 49
      },
      {
        id: 52,
        name: "defend",
        label: "Defend",
        points: 0,
        level: 1,
        depends: 0
      },
      {
        id: 53,
        name: "provoke",
        label: "Provoke",
        points: 0,
        level: 3,
        depends: 52
      },
      {
        id: 54,
        name: "vitality",
        label: "Vitality",
        points: 0,
        level: 3,
        depends: 52
      },
      {
        id: 55,
        name: "shield",
        label: "Shield",
        points: 0,
        level: 3,
        depends: 52
      },
      {
        id: 56,
        name: "iron_body",
        label: "Iron Body",
        points: 0,
        level: 5,
        depends: 54
      },
      {
        id: 57,
        name: "health",
        label: "Health",
        points: 0,
        level: 5,
        depends: 54
      },
      { id: 58, name: "bash", label: "Bash", points: 0, level: 5, depends: 55 },
      {
        id: 59,
        name: "intimidate",
        label: "Intimidate",
        points: 0,
        level: 10,
        depends: 53
      },
      {
        id: 60,
        name: "berserk",
        label: "Berserk",
        points: 0,
        level: 15,
        depends: [59, 56]
      },
      {
        id: 61,
        name: "die_hard",
        label: "Die Hard",
        points: 0,
        level: 20,
        depends: 60
      },
      { id: 62, name: "aid", label: "Aid", points: 0, level: 1, depends: 0 },
      { id: 63, name: "pray", label: "Pray", points: 0, level: 1, depends: 0 },
      { id: 64, name: "war", label: "War", points: 0, level: 1, depends: 0 },
      { id: 65, name: "heal", label: "Heal", points: 0, level: 3, depends: 62 },
      {
        id: 66,
        name: "light",
        label: "Light",
        points: 0,
        level: 3,
        depends: 63
      },
      {
        id: 67,
        name: "water",
        label: "Water",
        points: 0,
        level: 3,
        depends: 63
      },
      { id: 68, name: "dark", label: "Dark", points: 0, level: 3, depends: 63 },
      {
        id: 69,
        name: "bless",
        label: "Bless",
        points: 0,
        level: 5,
        depends: 66
      },
      {
        id: 70,
        name: "cure",
        label: "Cure",
        points: 0,
        level: 5,
        depends: [66, 67]
      },
      { id: 71, name: "rain", label: "Rain", points: 0, level: 5, depends: 67 },
      {
        id: 72,
        name: "curse",
        label: "Curse",
        points: 0,
        level: 5,
        depends: 68
      },
      {
        id: 73,
        name: "banish",
        label: "Banish",
        points: 0,
        level: 10,
        depends: 69
      },
      {
        id: 74,
        name: "dispel",
        label: "Dispel",
        points: 0,
        level: 10,
        depends: 72
      },
      {
        id: 75,
        name: "flame",
        label: "Flame",
        points: 0,
        level: 15,
        depends: 69
      },
      {
        id: 76,
        name: "exorcism",
        label: "Exorcism",
        points: 0,
        level: 15,
        depends: 73
      },
      {
        id: 77,
        name: "mass_cure",
        label: "Mass Cure",
        points: 0,
        level: 15,
        depends: 70
      },
      {
        id: 78,
        name: "summon",
        label: "Summon",
        points: 0,
        level: 15,
        depends: 71
      },
      {
        id: 79,
        name: "raise",
        label: "Raise",
        points: 0,
        level: 15,
        depends: 74
      },
      {
        id: 80,
        name: "leech",
        label: "Leech",
        points: 0,
        level: 15,
        depends: 74
      },
      {
        id: 81,
        name: "aura",
        label: "Aura",
        points: 0,
        level: 20,
        depends: 75
      },
      {
        id: 82,
        name: "holy",
        label: "Holy",
        points: 0,
        level: 20,
        depends: 76
      },
      {
        id: 83,
        name: "regen",
        label: "Regen",
        points: 0,
        level: 20,
        depends: 77
      },
      {
        id: 84,
        name: "acid_rain",
        label: "Acid Rain",
        points: 0,
        level: 20,
        depends: 78
      },
      {
        id: 85,
        name: "necromancy",
        label: "Necromancy",
        points: 0,
        level: 20,
        depends: 79
      },
      {
        id: 86,
        name: "force",
        label: "Force",
        points: 0,
        level: 20,
        depends: 80
      },
      { id: 87, name: "lore", label: "Lore", points: 0, level: 1, depends: 0 },
      {
        id: 88,
        name: "forage",
        label: "Forage",
        points: 0,
        level: 3,
        depends: 87
      },
      { id: 89, name: "cook", label: "Cook", points: 0, level: 5, depends: 88 },
      {
        id: 90,
        name: "perceive",
        label: "Perceive",
        points: 0,
        level: 5,
        depends: 87
      },
      {
        id: 91,
        name: "brew",
        label: "Brew",
        points: 0,
        level: 10,
        depends: 89
      },
      {
        id: 92,
        name: "iron_will",
        label: "Iron Will",
        points: 0,
        level: 10,
        depends: 90
      },
      {
        id: 93,
        name: "meditate",
        label: "Meditate",
        points: 0,
        level: 15,
        depends: 92
      },
      {
        id: 94,
        name: "trinket",
        label: "Trinket",
        points: 0,
        level: 20,
        depends: 93
      },
      {
        id: 95,
        name: "climb",
        label: "Climb",
        points: 0,
        level: 1,
        depends: 0
      },
      { id: 96, name: "hide", label: "Hide", points: 0, level: 1, depends: 0 },
      {
        id: 97,
        name: "knife",
        label: "Knife",
        points: 0,
        level: 1,
        depends: 0
      },
      {
        id: 98,
        name: "listen",
        label: "Listen",
        points: 0,
        level: 1,
        depends: 0
      },
      { id: 99, name: "jump", label: "Jump", points: 0, level: 3, depends: 95 },
      {
        id: 101,
        name: "sneak",
        label: "Sneak",
        points: 0,
        level: 3,
        depends: 96
      },
      {
        id: 102,
        name: "shoot",
        label: "Shoot",
        points: 0,
        level: 3,
        depends: 97
      },
      {
        id: 103,
        name: "kendo",
        label: "Kendo",
        points: 0,
        level: 3,
        depends: 97
      },
      {
        id: 104,
        name: "search",
        label: "Search",
        points: 0,
        level: 3,
        depends: 98
      },
      {
        id: 105,
        name: "dodge",
        label: "Dodge",
        points: 0,
        level: 5,
        depends: 99
      },
      {
        id: 106,
        name: "stab",
        label: "Stab",
        points: 0,
        level: 5,
        depends: 101
      },
      {
        id: 107,
        name: "luck",
        label: "Luck",
        points: 0,
        level: 5,
        depends: 101
      },
      {
        id: 108,
        name: "fish",
        label: "Fish",
        points: 0,
        level: 5,
        depends: 102
      },
      {
        id: 109,
        name: "dual",
        label: "Dual",
        points: 0,
        level: 5,
        depends: 103
      },
      {
        id: 110,
        name: "unlock",
        label: "Unlock",
        points: 0,
        level: 5,
        depends: 104
      },
      {
        id: 111,
        name: "appraise",
        label: "Appraise",
        points: 0,
        level: 5,
        depends: 104
      },
      {
        id: 112,
        name: "seduce",
        label: "Seduce",
        points: 0,
        level: 5,
        depends: 104
      },
      {
        id: 113,
        name: "escape",
        label: "Escape",
        points: 0,
        level: 10,
        depends: 105
      },
      {
        id: 114,
        name: "steal",
        label: "Steal",
        points: 0,
        level: 10,
        depends: 107
      },
      {
        id: 115,
        name: "trap",
        label: "Trap",
        points: 0,
        level: 10,
        depends: 110
      },
      {
        id: 116,
        name: "bluff",
        label: "Bluff",
        points: 0,
        level: 10,
        depends: 111
      },
      {
        id: 117,
        name: "sing",
        label: "Sing",
        points: 0,
        level: 10,
        depends: 112
      },
      {
        id: 118,
        name: "ninjutsu",
        label: "Ninjutsu",
        points: 0,
        level: 15,
        depends: [113, 106]
      },
      {
        id: 119,
        name: "gold",
        label: "Gold",
        points: 0,
        level: 15,
        depends: 114
      },
      {
        id: 120,
        name: "treasure",
        label: "Treasure",
        points: 0,
        level: 15,
        depends: [114, 108]
      },
      {
        id: 121,
        name: "wushu",
        label: "Wushu",
        points: 0,
        level: 15,
        depends: 109
      },
      {
        id: 122,
        name: "forgery",
        label: "Forgery",
        points: 0,
        level: 15,
        depends: 115
      },
      {
        id: 123,
        name: "bargain",
        label: "Bargain",
        points: 0,
        level: 15,
        depends: 116
      },
      {
        id: 124,
        name: "music",
        label: "Music",
        points: 0,
        level: 15,
        depends: 117
      },
      {
        id: 125,
        name: "kill",
        label: "Kill",
        points: 0,
        level: 20,
        depends: 106
      },
      {
        id: 126,
        name: "loot",
        label: "Loot",
        points: 0,
        level: 20,
        depends: [119, 120]
      },
      {
        id: 127,
        name: "catch",
        label: "Catch",
        points: 0,
        level: 20,
        depends: 121
      },
      {
        id: 128,
        name: "craft",
        label: "Craft",
        points: 0,
        level: 20,
        depends: 122
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
    fetch("https://api.jsonbin.io/b/5dbcf55cf9f7965e778aa979/2")
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
          />
          <br />
          <button className="btn btn-primary" onClick={() => this.loadState()}>
            Test load state HTTP
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={() => this.saveState()}>
            Save state
          </button>
        </div>
      </div>
    );
  }
}

export default App;
