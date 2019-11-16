import React, { Component } from "react";
import CharSheetUtils from "../utils/charsheetutils";
import SkillTreeMagePage from "./skilltreemagepage";
import SkillTreeFighterPage from "./skilltreefighterpage";
import SkillTreeClericPage from "./skilltreeclericpage";
import SkillTreeRoguePage from "./skilltreeroguepage";
import { Nav } from "react-bootstrap";

class SkillsPage extends Component {
  state = {
    showPage: [
      { name: "fightertree", show: 0 },
      { name: "clerictree", show: 0 },
      { name: "magetree", show: 1 },
      { name: "roguetree", show: 0 }
    ]
  };
  render() {
    return (
      <div
        className="no-gutters"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <br />
        {this.showStatusBar()}
        <Nav
          style={{ background: "whitesmoke" }}
          variant="tabs"
          defaultActiveKey="#mage"
        >
          <Nav.Item>
            <Nav.Link
              href="#fighter"
              onClick={() => this.showPage("fightertree")}
            >
              Fighter
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#cleric"
              onClick={() => this.showPage("clerictree")}
            >
              Cleric
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#mage" onClick={() => this.showPage("magetree")}>
              Mage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#rogue" onClick={() => this.showPage("roguetree")}>
              Rogue
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <SkillTreeMagePage
          skilltree={this.props.skilltree}
          getSkillIndex={this.getSkillIndex}
          handleSkillPoint={this.handleSkillPoint}
          checkAllSkillDeps={this.checkAllSkillDeps}
          getSkillPoints={this.getSkillPoints}
          getSkillModText={this.getSkillModText}
          getSkillId={this.getSkillId}
          show={this.isPageVisible("magetree")}
        />
        <SkillTreeFighterPage
          skilltree={this.props.skilltree}
          getSkillIndex={this.getSkillIndex}
          handleSkillPoint={this.handleSkillPoint}
          checkAllSkillDeps={this.checkAllSkillDeps}
          getSkillPoints={this.getSkillPoints}
          getSkillModText={this.getSkillModText}
          getSkillId={this.getSkillId}
          show={this.isPageVisible("fightertree")}
        />
        <SkillTreeClericPage
          skilltree={this.props.skilltree}
          getSkillIndex={this.getSkillIndex}
          handleSkillPoint={this.handleSkillPoint}
          checkAllSkillDeps={this.checkAllSkillDeps}
          getSkillPoints={this.getSkillPoints}
          getSkillModText={this.getSkillModText}
          getSkillId={this.getSkillId}
          show={this.isPageVisible("clerictree")}
        />
        <SkillTreeRoguePage
          skilltree={this.props.skilltree}
          getSkillIndex={this.getSkillIndex}
          handleSkillPoint={this.handleSkillPoint}
          checkAllSkillDeps={this.checkAllSkillDeps}
          getSkillPoints={this.getSkillPoints}
          getSkillModText={this.getSkillModText}
          getSkillId={this.getSkillId}
          show={this.isPageVisible("roguetree")}
        />
      </div>
    );
  }

  showPage = page => {
    let showPageCopy = this.state.showPage;
    for (let idx in this.state.showPage) {
      if (this.state.showPage[idx].name === page) showPageCopy[idx].show = 1;
      else showPageCopy[idx].show = 0;
    }
    this.setState({ showPage: showPageCopy });
  };

  isPageVisible = page => {
    for (let idx in this.state.showPage) {
      if (this.state.showPage[idx].name === page)
        if (this.state.showPage[idx].show === 1) return true;
        else return false;
    }
  };

  getSkillPoints = skillname => {
    let modpoints = 0;
    let itemmodname = "";
    let skilltreeid = this.getSkillId(skillname);

    if (this.props.skilltree[this.getSkillIndex(skillname)].points === 0)
      return 0; //If we don't have any base skill points yet, we can't use the skill and shouldn't add item mods

    for (var idx in this.props.itemslist) {
      for (var idx2 in this.props.itemslist[idx].mod) {
        if (
          this.props.itemslist[idx].mod[idx2].skilltreeid === skilltreeid &&
          this.props.itemslist[idx].equipped
        ) {
          modpoints += this.props.itemslist[idx].mod[idx2].value;
          itemmodname += this.props.itemslist[idx].itemname;
        }
      }
    }

    //Check for skill mods from race
    let race = this.props.charSheet.race;
    for (var idx in this.props.racesmod[race]) {
      if (this.props.racesmod[race][idx].skilltreeid == skilltreeid) {
        modpoints += this.props.racesmod[race][idx].value;
      }
    }

    return (
      this.props.skilltree[this.getSkillIndex(skillname)].points + modpoints
    );
  };

  getSkillModText = skillname => {
    //Used for the tooltip text when hovering over a skill that has item/race mods
    let modpoints = 0;
    let skillmodtext = "";
    let skilltreeid = this.getSkillId(skillname);

    //Check for skill mods from race
    let race = this.props.charSheet.race;
    for (var idx in this.props.racesmod[race]) {
      if (this.props.racesmod[race][idx].skilltreeid == skilltreeid) {
        if (skillmodtext !== "") skillmodtext += "<br>";
        skillmodtext +=
          "Racial: " + race + " (" + this.props.racesmod[race][idx].value + ")";
      }
    }

    //Check for skill mods from items
    for (var idx in this.props.itemslist) {
      for (var idx2 in this.props.itemslist[idx].mod) {
        if (
          this.props.itemslist[idx].mod[idx2].skilltreeid === skilltreeid &&
          this.props.itemslist[idx].equipped
        ) {
          if (skillmodtext !== "") skillmodtext += "<br>"; //More than 1 item mod found, so separate them
          modpoints += this.props.itemslist[idx].mod[idx2].value;
          skillmodtext +=
            this.props.itemslist[idx].itemname +
            " (" +
            this.props.itemslist[idx].mod[idx2].value +
            ")";
        }
      }
    }
    return skillmodtext;
  };

  getSkillIndex = name => {
    for (const idx in this.props.skilltree) {
      if (this.props.skilltree[idx].name === name) return idx;
    }
  };

  getSkillId = name => {
    for (const idx in this.props.skilltree) {
      if (this.props.skilltree[idx].name === name)
        return this.props.skilltree[idx].id;
    }
  };

  static getSkillName = (skilltree, skilltreeid) => {
    for (var idx in skilltree)
      if (skilltree[idx].id === skilltreeid) return skilltree[idx].name;
  };

  static getSkillLabelbyId = (skilltree, skilltreeid) => {
    for (var idx in skilltree)
      if (skilltree[idx].id === skilltreeid) return skilltree[idx].label;
  };

  showStatusBar = () => {
    /*  Might use this later on with mutiple skill trees..
    if (this.state.enoughspalert) {
      return (
        <div
          className="alert alert-warning"
          role="alert"
          onClick={this.resetAllAlerts}
        >
          No skillpoints left
        </div>
      );
    }
    if (this.state.levelreqalert) {
      return (
        <div
          className="alert alert-warning"
          role="alert"
          onClick={this.resetAllAlerts}
        >
          Level not high enough
        </div>
      );
    }

    if (this.state.skilldepalert) {
      return (
        <div
          className="alert alert-warning"
          role="alert"
          onClick={this.resetAllAlerts}
        >
          Skill dependency not met
        </div>
      );
    }

    if (this.state.maxskillalert) {
      return (
        <div
          className="alert alert-warning"
          role="alert"
          onClick={this.resetAllAlerts}
        >
          Maximum skill reached
        </div>
      );
    }*/
    return (
      <div className="card">
        <div className="card-body">
          <h5>
            Skillpoints:&nbsp;
            <span
              className={
                this.props.charSheet.sp > 0
                  ? "badge badge-secondary"
                  : "badge badge-danger"
              }
            >
              {this.props.charSheet.sp}
            </span>
          </h5>
        </div>
      </div>
    );
  };

  resetAllAlerts = () => {
    this.setState({ levelreqalert: 0 });
    this.setState({ skilldepalert: 0 });
    this.setState({ maxskillalert: 0 });
    this.setState({ enoughspalert: 0 });
  };

  checkSkillLevelReq = (skilltreeindex, currentlvl) => {
    return this.props.skilltree[skilltreeindex].level <= currentlvl
      ? true
      : false;
  };

  checkSkillDep = skilltreeindex => {
    if (this.props.skilltree[skilltreeindex].level > 1) {
      let skilldepends = this.props.skilltree[skilltreeindex].depends;

      // Some skill dependencies can be met from more than 1 skill.
      // Ex: Cure can be enabled by choosing Water and Light
      var skillfound = 0;
      if (skilldepends.constructor === Array) {
        for (const idx in this.props.skilltree) {
          if (skilldepends.includes(this.props.skilltree[idx].id)) {
            if (this.props.skilltree[idx].points >= 1) {
              skillfound += 1;
            }
          }
        }
        if (skillfound === skilldepends.length) return true;
        else return false;
      }

      for (const idx in this.props.skilltree) {
        if (this.props.skilltree[idx].id === skilldepends) {
          if (this.props.skilltree[idx].points >= 1) {
            return true;
          } else return false;
        }
      }
    }
    return true;
  };

  checkMaxSkill = (skilltreeindex, currentlvl) => {
    if (
      currentlvl + 1 >
      this.props.skilltree[skilltreeindex].points +
        this.props.skilltree[skilltreeindex].level
    ) {
      return true;
    } else return false;
  };

  checkEnoughSp = () => {
    return this.props.charSheet.sp > 0 ? true : false;
  };

  checkClass = skilltreeindex => {
    //Once we are dual classed, we cannot add skillpoints to trees other than those classes
    if (this.props.charSheet.class.length === 2) {
      if (
        !this.props.charSheet.class.includes(
          this.props.skilltree[skilltreeindex].class
        )
      )
        return false;
      else return true;
    }
    return true;
  };

  checkAllSkillDeps = skilltreeindex => {
    let currentlvl = CharSheetUtils.getLevelFromXP(this.props.charSheet);
    let levelreq = false;
    let skilldep = false;
    let maxskill = false;
    let enoughsp = false;
    let allowedclass = false;

    this.checkSkillLevelReq(skilltreeindex, currentlvl)
      ? (levelreq = true)
      : (levelreq = false); //this.setState({ levelreqalert: true });

    this.checkSkillDep(skilltreeindex) ? (skilldep = true) : (skilldep = false); //this.setState({ skilldepalert: 1 });

    this.checkMaxSkill(skilltreeindex, currentlvl)
      ? (maxskill = true)
      : (maxskill = false); //this.setState({ maxskillalert: 1 });

    this.checkEnoughSp() ? (enoughsp = true) : (enoughsp = false); //this.setState({ enoughspalert: 1 });

    this.checkClass(skilltreeindex)
      ? (allowedclass = true)
      : (allowedclass = false);

    if (levelreq && skilldep && maxskill && enoughsp && allowedclass)
      return true;
    else return false;
  };

  setClass = charclass => {
    let charSheetCopy = this.props.charSheet;

    if (charSheetCopy.class.length == 0) {
      charSheetCopy.class.push(charclass);
    } else if (
      !charSheetCopy.class.includes(charclass) &&
      charSheetCopy.class.length < 2
    )
      //Allow dual classes, but not higher
      charSheetCopy.class.push(charclass);

    this.setState({ charSheet: charSheetCopy });
  };

  handleSkillPoint = skilltreeindex => {
    this.resetAllAlerts();

    if (this.checkAllSkillDeps(skilltreeindex)) {
      let skilltreecopy = this.props.skilltree;
      skilltreecopy[skilltreeindex].points += 1;
      this.setState({ skilltree: skilltreecopy });

      this.setClass(skilltreecopy[skilltreeindex].class);

      let charSheetCopy = this.props.charSheet;
      charSheetCopy.sp -= 1;
      this.setState({ charSheet: charSheetCopy });
    }
  };
}

export default SkillsPage;
