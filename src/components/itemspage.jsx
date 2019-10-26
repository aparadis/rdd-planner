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

  itemlistdisplay = () => {
    let output = [];

    for (var idx in this.props.itemslist) {
      output.push(
        <tr key={idx}>
          <td>{this.props.itemslist[idx].itemname}</td>
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
