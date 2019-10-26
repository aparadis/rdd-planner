import React, { Component } from "react";
import CharSheetPage from "./charsheetpage";
import ItemsPage from "./itemspage";
import SkillsPage from "./skillspage";
import { Nav } from "react-bootstrap";

class App extends Component {
  state = {
    count: 0,
    statsList: ["CON", "STR", "DEX", "INT", "WIS", "CHA"],
    classList: ["cleric", "fighter", "mage", "rogue"],
    charSheet: {
      xp: 269100,
      con: 13,
      str: 10,
      dex: 23,
      int: 23,
      wis: 10,
      cha: 9,
      sp: 50
    },
    itemslist: [
      {
        itemid: 1,
        itemname: "Stick of Clue",
        equipslot: "weapon",
        equipped: true,
        mod: [{ skilltreeid: 1, value: 2 }, { skilltreeid: 3, value: 4 }]
      },
      {
        itemid: 2,
        itemname: "Boots of Greater Fiyaaa",
        equipslot: "boots",
        equipped: true,
        mod: [
          { skilltreeid: 1, value: 3 },
          { skilltreeid: 7, value: 4 },
          { skilltreeid: 10, value: 2 }
        ]
      },
      {
        itemid: 1,
        itemname: "Gloves of Numb Fingers",
        equipslot: "hand",
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

  render() {
    return (
      <div className="container no-gutters" id="main">
        <div className="col no-gutters">
          <div className="row no-gutters" id="main-title">
            <h1>RDD Character Planner</h1>
          </div>

          <Nav variant="tabs" defaultActiveKey="#sheet">
            <Nav.Item>
              <Nav.Link href="#sheet" onSelect={this.showCharSheetPage}>
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
        </div>
      </div>
    );
  }
}

export default App;
