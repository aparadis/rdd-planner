import React, { Component } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import SkillTreeClericPray from "./skilltreeclericpray";
import SkillTreeClericLore from "./skilltreeclericlore";

class SkillTreeClericPage extends Component {
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
                Pray Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <SkillTreeClericPray
                  skilltree={this.props.skilltree}
                  getSkillIndex={this.props.getSkillIndex}
                  handleSkillPoint={this.props.handleSkillPoint}
                  checkAllSkillDeps={this.props.checkAllSkillDeps}
                  getSkillPoints={this.props.getSkillPoints}
                  getSkillItemModText={this.props.getSkillItemModText}
                  getSkillId={this.props.getSkillId}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className={"border-0"}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                Lore Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SkillTreeClericLore
                  skilltree={this.props.skilltree}
                  getSkillIndex={this.props.getSkillIndex}
                  handleSkillPoint={this.props.handleSkillPoint}
                  checkAllSkillDeps={this.props.checkAllSkillDeps}
                  getSkillPoints={this.props.getSkillPoints}
                  getSkillItemModText={this.props.getSkillItemModText}
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

export default SkillTreeClericPage;
