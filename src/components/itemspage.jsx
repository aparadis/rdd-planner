import React, { Component } from "react";
import ItemModsLabel from "./itemmodslabel";

class ItemsPage extends Component {
  state = {};

  render() {
    return (
      <div style={{ display: this.props.show ? "block" : "none" }}>
        <h3>lol items</h3>
        {this.itemlistdisplay()}
      </div>
    );
  }

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
