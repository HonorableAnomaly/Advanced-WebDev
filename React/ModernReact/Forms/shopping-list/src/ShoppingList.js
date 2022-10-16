import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuidv4 } from "uuid";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "cheese", qty: "3 blocks", id: uuidv4() },
        { name: "bread", qty: "1 loaf", id: uuidv4() }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    let newItem = { ...item, id: uuidv4() };
    this.setState((state) => ({
      items: [...state.items, newItem]
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>ShoppingList</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
