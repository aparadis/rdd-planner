import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Select from "react-select";
import SkillsPage from "./skillspage";

class ItemAddModel extends Component {
  state = {
    show: false,
    itemid: "",
    itemname: "",
    equipslot: "",
    equipped: false,
    skillmods: [],
    statmods: [],
    statType: "",
    statmodvalue: 0,
    skillmodvalue: 0,
    skillmodid: 0,
    isValidName: false,
    isValidSlot: false,
    skillSuggestions: [],
    statSuggestions: []
  };

  componentDidMount() {
    this.buildSkillSuggestions();
    this.buildStatSuggestions();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Item
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Body>
            <div className="form-group">
              <form>
                <label htmlFor="itemname">Item name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemname"
                  value={this.state.itemname}
                  onChange={this.handleItemName}
                ></input>
                <label htmlFor="itemtype">Equip slot:</label>
                <select
                  value={this.state.equipslot}
                  onChange={this.handleItemSlot}
                  className="form-control"
                  id="itemslot"
                >
                  <option value="">Select</option>
                  <option value="hand">Hand</option>
                  <option value="head">Head</option>
                  <option value="back">Back</option>
                  <option value="chest">Chest</option>
                  <option value="shoulder">Shoulder</option>
                  <option value="feet">Feet</option>
                  <option value="glove">Glove</option>
                  <option value="wrist">Wrist</option>
                  <option value="waist">Waist</option>
                  <option value="finger">Finger</option>
                  <option value="neck">Neck</option>
                </select>
                <label htmlFor="itemskillmod">Item Skill Mods:</label>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <Select
                          options={this.state.skillSuggestions}
                          onChange={this.handleSuggestion}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          id="itemskillmods"
                          style={{ width: 65 }}
                          value={this.state.skillmodvalue}
                          onChange={this.handleSkillModValue}
                        ></input>
                      </td>
                      <td>
                        <button
                          className="btn btn-small btn-success"
                          onClick={this.handleAddItemSkillMod}
                        >
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>{this.showSkillModsList()}</td>
                    </tr>
                  </tbody>
                </table>
                <label htmlFor="itemsstatmod">Item Stat Mods:</label>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <Select
                          options={this.state.statSuggestions}
                          onChange={this.handleStatSuggestion}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          id="itemskillmods"
                          style={{ width: 65 }}
                          value={this.state.statmodvalue}
                          onChange={this.handleStatModValue}
                        ></input>
                      </td>
                      <td>
                        <button
                          className="btn btn-small btn-success"
                          onClick={this.handleAddItemStatMod}
                        >
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>{this.showStatModsList()}</td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant={
                this.state.isValidName && this.state.isValidSlot
                  ? "primary"
                  : "danger"
              }
              onClick={this.handleSave}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  showSkillModsList = () => {
    let output = [];
    for (let idx in this.state.skillmods) {
      let tmpSkillLabel = SkillsPage.getSkillLabelbyId(
        this.props.skilltree,
        this.state.skillmods[idx].skilltreeid
      );
      output.push(
        <div key={idx} className="font-weight-bold text-success">
          {tmpSkillLabel}&nbsp; {this.state.skillmods[idx].value}
        </div>
      );
    }
    return output;
  };

  showStatModsList = () => {
    let output = [];
    for (let idx in this.state.statmods) {
      output.push(
        <div key={idx} className="font-weight-bold text-success">
          {this.state.statmods[idx].stat.toUpperCase()}&nbsp;
          {this.state.statmods[idx].value}
        </div>
      );
    }
    return output;
  };

  handleAddItemSkillMod = e => {
    e.preventDefault();
    let skillmodsCopy = this.state.skillmods;
    if (this.state.skillmodvalue && this.state.skillmodid) {
      skillmodsCopy.push({
        skilltreeid: this.state.skillmodid,
        value: this.state.skillmodvalue
      });
    }
    console.log(skillmodsCopy);
    this.setState({ skillmods: skillmodsCopy });
  };

  handleAddItemStatMod = e => {
    e.preventDefault();
    let statmodsCopy = this.state.statmods;
    if (this.state.statmodvalue && this.state.statType) {
      statmodsCopy.push({
        stat: this.state.statType,
        value: this.state.statmodvalue
      });
    }
    console.log(statmodsCopy);
    this.setState({ statmods: statmodsCopy });
  };

  handleSkillModValue = e => {
    this.setState({ skillmodvalue: +e.target.value });
  };

  handleStatModValue = e => {
    this.setState({ statmodvalue: +e.target.value });
  };

  handleSuggestion = e => {
    console.log(e);
    this.setState({ skillmodid: e.value });
  };

  handleStatSuggestion = e => {
    this.setState({ statType: e.value });
  };

  buildSkillSuggestions = () => {
    let skills = [];

    for (let idx in this.props.skilltree) {
      skills.push({
        value: this.props.skilltree[idx].id,
        label: this.props.skilltree[idx].label
      });
    }
    this.setState({ skillSuggestions: skills });
  };

  buildStatSuggestions = () => {
    let statTypes = ["CON", "STR", "DEX", "INT", "WIS", "CHA"];
    let stats = [];
    for (let idx in statTypes) {
      stats.push({
        value: statTypes[idx].toLowerCase(),
        label: statTypes[idx]
      });
    }
    this.setState({ statSuggestions: stats });
  };

  setShow = state => {
    this.setState({ show: state });
  };

  handleClose = () => {
    this.setState({
      itemid: "",
      itemname: "",
      equipslot: "",
      equipped: false,
      skillmods: [],
      statmods: [],
      isValid: false,
      isValidName: false,
      isValidSlot: false
    });
    this.setShow(false);
  };

  handleShow = () => this.setShow(true);

  handleItemName = e => {
    this.setState({ isValidName: false });
    if (e.target.value) {
      this.setState({ isValidName: true });
    }
    this.setState({ itemname: e.target.value });
  };

  handleItemSlot = e => {
    this.setState({ isValidSlot: false });
    if (e.target.value) {
      this.setState({ isValidSlot: true });
    }
    this.setState({ equipslot: e.target.value });
  };

  handleSave = () => {
    let tmpobj = {};

    tmpobj.itemname = this.state.itemname;
    tmpobj.equipslot = this.state.equipslot;
    tmpobj.mod = this.state.skillmods;
    tmpobj.statmod = this.state.statmods;

    if (this.state.isValidName && this.state.isValidSlot) {
      this.props.handleSave(tmpobj);
      this.setState({
        itemid: "",
        itemname: "",
        equipslot: "",
        equipped: false,
        skillmods: [],
        statmod: [],
        isValid: false,
        isValidName: false,
        isValidSlot: false
      });
    }
  };
}

export default ItemAddModel;
