import React, { Component } from "react";
import CharSheetUtils from "../utils/charsheetutils";
import { Button, Accordion, Card } from "react-bootstrap";
import SkillTreeMageCast from "./skilltreemagecast";
import SkillTreeMageKl from "./skilltreemagekl";

class SkillsPage extends Component {
  state = {
    /* levelreqalert: 0,
    skilldepalert: 0,
    maxskillalert: 0,
    enoughspalert: 0*/
  };
  render() {
    return (
      <div
        className="col-6 no-gutters"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        {this.showStatusBar()}

        <Accordion defaultActiveKey="0">
          <Card className={"border-0"}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                Cast Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <SkillTreeMageCast
                  skilltree={this.props.skilltree}
                  getSkillIndex={this.getSkillIndex}
                  handleSkillPoint={this.handleSkillPoint}
                  checkAllSkillDeps={this.checkAllSkillDeps}
                  getSkillPoints={this.getSkillPoints}
                  getSkillItemModText={this.getSkillItemModText}
                  getSkillId={this.getSkillId}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className={"border-0"}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                Knowledge Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SkillTreeMageKl
                  skilltree={this.props.skilltree}
                  getSkillIndex={this.getSkillIndex}
                  handleSkillPoint={this.handleSkillPoint}
                  checkAllSkillDeps={this.checkAllSkillDeps}
                  getSkillPoints={this.getSkillPoints}
                  getSkillItemModText={this.getSkillItemModText}
                  getSkillId={this.getSkillId}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }

  getSkillPoints = skillname => {
    let modpoints = 0;
    let itemmodname = "";
    let skilltreeid = this.getSkillId(skillname);

    if (this.props.skilltree[this.getSkillIndex(skillname)].points === 0)
      return 0; //If we don't have any base skill points yet, we can't use the skill and shouldn't add item mods

    for (var idx in this.props.itemslist) {
      for (var idx2 in this.props.itemslist[idx].mod) {
        if (this.props.itemslist[idx].mod[idx2].skilltreeid === skilltreeid) {
          modpoints += this.props.itemslist[idx].mod[idx2].value;
          itemmodname += this.props.itemslist[idx].itemname;
        }
      }
    }

    return (
      this.props.skilltree[this.getSkillIndex(skillname)].points + modpoints
    );
  };

  getSkillItemModText = skillname => {
    let modpoints = 0;
    let itemmodtext = "";
    let skilltreeid = this.getSkillId(skillname);

    for (var idx in this.props.itemslist) {
      for (var idx2 in this.props.itemslist[idx].mod) {
        if (this.props.itemslist[idx].mod[idx2].skilltreeid === skilltreeid) {
          if (itemmodtext !== "") itemmodtext += "<br>"; //More than 1 item mod found, so separate them
          modpoints += this.props.itemslist[idx].mod[idx2].value;
          itemmodtext +=
            this.props.itemslist[idx].itemname +
            " +" +
            this.props.itemslist[idx].mod[idx2].value;
        }
      }
    }

    console.log(itemmodtext);
    return itemmodtext;
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
    /*
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
      <div className="alert alert-dark">
        Skillpoints: ({this.props.charSheet.sp})
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

  checkAllSkillDeps = skilltreeindex => {
    let currentlvl = CharSheetUtils.getLevelFromXP(this.props.charSheet);
    let levelreq = false;
    let skilldep = false;
    let maxskill = false;
    let enoughsp = false;

    this.checkSkillLevelReq(skilltreeindex, currentlvl)
      ? (levelreq = true)
      : (levelreq = false); //this.setState({ levelreqalert: true });

    this.checkSkillDep(skilltreeindex) ? (skilldep = true) : (skilldep = false); //this.setState({ skilldepalert: 1 });

    this.checkMaxSkill(skilltreeindex, currentlvl)
      ? (maxskill = true)
      : (maxskill = false); //this.setState({ maxskillalert: 1 });

    this.checkEnoughSp() ? (enoughsp = true) : (enoughsp = false); //this.setState({ enoughspalert: 1 });

    if (levelreq && skilldep && maxskill && enoughsp) return true;
    else return false;
  };

  handleSkillPoint = skilltreeindex => {
    this.resetAllAlerts();

    if (this.checkAllSkillDeps(skilltreeindex)) {
      let skilltreecopy = this.props.skilltree;
      skilltreecopy[skilltreeindex].points += 1;
      this.setState({ skilltree: skilltreecopy });

      let charSheetCopy = this.props.charSheet;
      charSheetCopy.sp -= 1;
      this.setState({ charSheet: charSheetCopy });
    }
  };
}

export default SkillsPage;
