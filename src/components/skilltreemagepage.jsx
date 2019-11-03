import React, { Component } from "react";
import CharSheetUtils from "../utils/charsheetutils";
import { Button, Accordion, Card } from "react-bootstrap";
import SkillTreeMageCast from "./skilltreemagecast";
import SkillTreeMageKl from "./skilltreemagekl";

class SkillTreeMagePage extends Component {
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
                Cast Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <SkillTreeMageCast
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
                Knowledge Tree
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <SkillTreeMageKl
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

export default SkillTreeMagePage;
