import React, { Component } from "react";
import "./ShoppingCart.css";
import ItemCard from "./ItemCard";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    const { items } = this.props;
    let total = 0;
    items.forEach((item) => {
      total = total + item.price * item.amount;
    });

    const showItems = items.map((item) => {
      return (
        <ItemCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          amount={item.amount}
        />
      );
    });

    return (
      <div className="table-font">
        <h4>Food Cart</h4>
        <span id="itemCard">{showItems}</span>
        <div className="row" style={{ marginTop: "3%" }}>
          <div className="col-4">
            <a style={{ color: "blue", fontSize: "15px" }}>
              <i className="fas fa-long-arrow-alt-left" /> Continue Shopping
            </a>
          </div>
          <div className="col-4"></div>
          <div className="col-4" style={{ color: "black", fontSize: "20px" }}>
            <span style={{ color: "#c6c6c6", fontSize: "10px" }}>
              SubTotal:
            </span>{" "}
            <i className="fas fa-dollar-sign" />
            {total.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cartR.items,
});
export default connect(mapStateToProps)(ShoppingCart);
