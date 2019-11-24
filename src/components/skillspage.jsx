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
          <Nav.Item style={{ background: "red" }}>
            <Nav.Link
              href="#fighter"
              onClick={() => this.showPage("fightertree")}
            >
              Fighter
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ background: "#EE82EE" }}>
            <Nav.Link
              href="#cleric"
              onClick={() => this.showPage("clerictree")}
            >
              Cleric
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ background: "lightblue" }}>
            <Nav.Link href="#mage" onClick={() => this.showPage("magetree")}>
              Mage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ background: "lightgreen" }}>
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
          checkPrestigeSkill={this.checkPrestigeSkill}
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
          checkPrestigeSkill={this.checkPrestigeSkill}
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
          checkPrestigeSkill={this.checkPrestigeSkill}
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
          checkPrestigeSkill={this.checkPrestigeSkill}
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
      if (this.props.racesmod[race][idx].skilltreeid === skilltreeid) {
        modpoints += this.props.racesmod[race][idx].value;
      }
    }

    //Check for prestige class bonuses
    let curclass = this.props.charSheet.class[0];
    let pclasses = this.props.prestigeclass.find(p => p.name === curclass);
    if (pclasses) {
      for (let idx in pclasses.skillmod) {
        if (pclasses.skillmod[idx].skilltreeid === skilltreeid) {
          modpoints += pclasses.skillmod[idx].value;
        }
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

    //Check for prestige class bonuses
    let curclass = this.props.charSheet.class[0];
    let pclasses = this.props.prestigeclass.find(p => p.name === curclass);
    if (pclasses) {
      for (let idx in pclasses.skillmod) {
        if (pclasses.skillmod[idx].skilltreeid === skilltreeid) {
          if (skillmodtext !== "") skillmodtext += "<br>"; //More than 1 item mod found, so separate them
          skillmodtext +=
            "Prestige: " +
            pclasses.name +
            " (" +
            pclasses.skillmod[idx].value +
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
            &nbsp;&nbsp; (Class:&nbsp;
            <span>{CharSheetUtils.showClass(this.props.charSheet)}</span>)
          </h5>
        </div>
      </div>
    );
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

  getClassFromSkillId = skilltreeid => {
    for (let idx in this.props.skilltree) {
      if (this.props.skilltree[idx].id === skilltreeid)
        return this.props.skilltree[idx].class;
    }
  };

  checkPrestigeSkill = skilltreeindex => {
    //Can only be assigned 1 prestige class
    if (this.havePrestigeClass()) {
      let curprestigeclass = this.props.charSheet.class[0];
      if (this.isPrestigeSkill(skilltreeindex)) {
        //This is a prestige skill, but need to know if its for
        // our current class
        for (let idx in this.props.prestigeclass) {
          if (this.props.prestigeclass[idx].name === curprestigeclass) {
            if (
              this.props.prestigeclass[idx].skilltreeid ===
              this.props.skilltree[skilltreeindex].id
            )
              return true;
            else return false;
          }
        }
      }
    }

    if (this.isPrestigeSkill(skilltreeindex)) {
      let skilltreeid = this.props.skilltree[skilltreeindex].id;
      let pclasses = this.props.prestigeclass.find(
        p => p.skilltreeid === skilltreeid
      ).skilltreeclass;

      // If we're dual class and this is a single-class prestige skill,
      //  then we can't assign points to it
      if (this.props.charSheet.class.length === 2 && pclasses.length === 1) {
        return false;
      }

      //If we're single class, we can't assign a skillpoint to a dual class
      //  prestige skill (until we actually dual class)
      if (this.props.charSheet.class.length === 1 && pclasses.length === 2) {
        return false;
      }

      // If we're single class, can't assign skillpoint to another single class
      //  prestige skill that is not our current class
      if (this.props.charSheet.class.length === 1 && pclasses.length === 1) {
        if (!pclasses.includes(this.props.charSheet.class[0])) return false;
      }

      // If we're dual-class and this is a dual-class prestige skill
      //  check if they're for the same classes
      if (this.props.charSheet.class.length === 2 && pclasses.length === 2) {
        if (
          JSON.stringify(this.props.charSheet.class.sort()) !==
          JSON.stringify(pclasses.sort())
        ) {
          return false;
        }
      }
    }
    return true;
  };

  checkClass = skilltreeindex => {
    if (this.havePrestigeClass() && !this.isPrestigeSkill(skilltreeindex)) {
      let curprestigeclass = this.props.charSheet.class[0];
      let allowedtree = this.props.prestigeclass.find(
        p => p.name === curprestigeclass
      );
      if (
        allowedtree.skilltreeclass.includes(
          this.props.skilltree[skilltreeindex].class
        )
      ) {
        return true;
      } else return false;
    }

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

  isPrestigeSkill = skilltreeindex => {
    for (let idx in this.props.prestigeclass) {
      if (
        this.props.prestigeclass[idx].skilltreeid ===
        this.props.skilltree[skilltreeindex].id
      )
        return true;
    }

    return false;
  };
  checkAllSkillDeps = skilltreeindex => {
    let currentlvl = CharSheetUtils.getLevelFromXP(this.props.charSheet);
    let levelreq = false;
    let skilldep = false;
    let maxskill = false;
    let enoughsp = false;
    let allowedclass = false;
    let allowprestigeskill = false;

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

    this.checkPrestigeSkill(skilltreeindex)
      ? (allowprestigeskill = true)
      : (allowprestigeskill = false);

    if (
      levelreq &&
      skilldep &&
      maxskill &&
      enoughsp &&
      allowedclass &&
      allowprestigeskill
    )
      return true;
    else return false;
  };

  havePrestigeClass = () => {
    let prestigefound = false;
    for (let idx in this.props.prestigeclass) {
      if (
        this.props.charSheet.class.includes(this.props.prestigeclass[idx].name)
      ) {
        prestigefound = true;
      }
    }
    return prestigefound;
  };

  setClass = (charclass, skilltreeid) => {
    let charSheetCopy = this.props.charSheet;

    //Check if we already have a prestige class assigned
    if (!this.havePrestigeClass()) {
      //Check if we assigning a new prestige class
      for (let idx in this.props.prestigeclass) {
        if (this.props.prestigeclass[idx].skilltreeid === skilltreeid) {
          charSheetCopy.class = [this.props.prestigeclass[idx].name];
          this.setState({ charSheet: charSheetCopy });
          return;
        }
      }
    }
    // If we are already a prestige class, assigning a skill that is
    // in our tree but not a prestige skill should not "dual class"
    // us.  Ex: Assiging skill Demon (Prestige Warlock) then Wand should not
    // assign us a "Warlock/Mage" class, so exit now to stay only "Warlock"
    else return false;

    //Check if this is our first class
    if (charSheetCopy.class.length === 0) {
      charSheetCopy.class.push(charclass);
      this.setState({ charSheet: charSheetCopy });
      return;
    }

    //Allow dual classes, but not higher
    if (
      !charSheetCopy.class.includes(charclass) &&
      charSheetCopy.class.length < 2
    ) {
      charSheetCopy.class.push(charclass);
      this.setState({ charSheet: charSheetCopy });
      return;
    }
  };

  handleSkillPoint = skilltreeindex => {
    if (this.checkAllSkillDeps(skilltreeindex)) {
      let skilltreecopy = this.props.skilltree;
      let charSheetCopy = this.props.charSheet;

      if (skilltreecopy[skilltreeindex].points < 20) {
        skilltreecopy[skilltreeindex].points += 1;
        charSheetCopy.sp -= 1;
        this.setState({ skilltree: skilltreecopy });
      }
      this.setClass(
        skilltreecopy[skilltreeindex].class,
        skilltreecopy[skilltreeindex].id,
        skilltreeindex
      );

      this.setState({ charSheet: charSheetCopy });
    }
  };
}

export default SkillsPage;
