import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class ItemAddModel extends Component {
  state = {
    show: false,
    itemid: "",
    itemname: "",
    equipslot: "",
    equipped: false,
    mod: [{}],
    isValidName: false,
    isValidSlot: false
  };

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
                  <option value="weapon">Weapon</option>
                  <option value="shield">Shield</option>
                  <option value="head">Head</option>
                  <option value="cape">Cape</option>
                  <option value="armor">Armor</option>
                  <option value="boot">Boot</option>
                  <option value="glove">Glove</option>
                  <option value="belt">Belt</option>
                  <option value="ring">Ring</option>
                  <option value="neck">Neck</option>
                </select>
                <label htmlFor="itemskillmod">Item Skill Mods:</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemskillmod"
                ></input>
                <label htmlFor="itemstatmod">Item Stat Mods:</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemstatmods"
                ></input>
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

  setShow = state => {
    this.setState({ show: state });
  };

  handleClose = () => this.setShow(false);

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

  handleItemMod = e => {};

  handleSave = () => {
    let tmpobj = {};

    tmpobj.itemname = this.state.itemname;
    tmpobj.equipslot = this.state.equipslot;

    /*temporary until handling skill mods selection*/
    tmpobj.mod = [{}, {}];

    tmpobj.mod[0].skilltreeid = Math.floor(
      Math.random() * (0 - this.props.skilltree.length + 1) +
        this.props.skilltree.length +
        1
    );
    tmpobj.mod[0].value = Math.floor(Math.random() * (0 - 4) + 4);
    tmpobj.mod[1].skilltreeid = Math.floor(
      Math.random() * (0 - this.props.skilltree.length + 1) +
        this.props.skilltree.length +
        1
    );
    tmpobj.mod[1].value = Math.floor(Math.random() * (0 - 4) + 4);
    /*temporary until handling skill mods selection*/

    if (this.state.isValidName && this.state.isValidSlot) {
      this.props.handleSave(tmpobj);
      this.setState({
        itemid: "",
        itemname: "",
        equipslot: "",
        equipped: false,
        mod: [{}],
        isValid: false,
        isValidName: false,
        isValidSlot: false
      });
    }
  };
}

export default ItemAddModel;
