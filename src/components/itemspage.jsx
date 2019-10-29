import React, { Component } from "react";
import ItemModsLabel from "./itemmodslabel";
import ItemAddModal from "./itemaddmodal";

class ItemsPage extends Component {
  state = {};

  render() {
    return (
      <div style={{ display: this.props.show ? "block" : "none" }}>
        <br />
        <ItemAddModal
          itemslist={this.props.itemslist}
          handleSave={this.handleSave}
          skilltree={this.props.skilltree}
        />
        <br />
        <br />
        {this.itemlistdisplay()}
      </div>
    );
  }
  handleSave = item => {
    let itemslistCopy = this.props.itemslist;
    itemslistCopy.push(item);
    this.setState({ itemslist: itemslistCopy });
  };

  toggleEquip = itemindex => {
    let itemslistCopy = this.props.itemslist;
    let isEquipped = itemslistCopy[itemindex].equipped;

    isEquipped
      ? (itemslistCopy[itemindex].equipped = false)
      : (itemslistCopy[itemindex].equipped = true);

    this.setState({ itemslist: itemslistCopy });
  };

  itemlistdisplay = () => {
    let output = [];

    for (let idx in this.props.itemslist) {
      let isEquipped = this.props.itemslist[idx].equipped;
      output.push(
        <tr key={idx}>
          <td>{this.props.itemslist[idx].itemname}</td>
          <td>{this.props.itemslist[idx].equipslot}</td>
          <td>
            <button
              className={
                isEquipped ? "btn btn-sm btn-success" : "btn btn-sm btn-primary"
              }
              onClick={() => this.toggleEquip(idx)}
            >
              {isEquipped ? "✓" : "Equip"}
            </button>
          </td>
          <td>
            <ItemModsLabel
              skilltree={this.props.skilltree}
              mod={this.props.itemslist[idx].mod}
            />
          </td>
        </tr>
      );
    }

    return (
      <div>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Slot</th>
              <th>Equipped</th>
              <th>Mods</th>
            </tr>
          </thead>
          <tbody>{output}</tbody>
        </table>
      </div>
    );
  };
}

export default ItemsPage;
