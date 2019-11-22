import React, { Component } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import SkillTreeRogueKnife from "./skilltreerogueknife";
import SkillTreeRogueListen from "./skilltreeroguelisten";

class SkillTreeRoguePage extends Component {
  render() {
    return (
      <div
        className="no-gutters"
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <Accordion defaultActiveKey="0">
          <Card className={"border-0"}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                Knife/Loot Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <SkillTreeRogueKnife
                  skilltree={this.props.skilltree}
                  getSkillIndex={this.props.getSkillIndex}
                  handleSkillPoint={this.props.handleSkillPoint}
                  checkAllSkillDeps={this.props.checkAllSkillDeps}
                  checkPrestigeSkill={this.props.checkPrestigeSkill}
                  getSkillPoints={this.props.getSkillPoints}
                  getSkillModText={this.props.getSkillModText}
                  getSkillId={this.props.getSkillId}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className={"border-0"}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                Listen Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SkillTreeRogueListen
                  skilltree={this.props.skilltree}
                  getSkillIndex={this.props.getSkillIndex}
                  handleSkillPoint={this.props.handleSkillPoint}
                  checkAllSkillDeps={this.props.checkAllSkillDeps}
                  checkPrestigeSkill={this.props.checkPrestigeSkill}
                  getSkillPoints={this.props.getSkillPoints}
                  getSkillModText={this.props.getSkillModText}
                  getSkillId={this.props.getSkillId}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default SkillTreeRoguePage;
