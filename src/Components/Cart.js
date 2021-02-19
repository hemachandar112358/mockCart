import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import CardDetails from "./CardDetails";

class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ height: "80vh" }}>
          <div className="col-8">
            <ShoppingCart />
          </div>
          <div
            className="col-4"
            style={{
              borderRadius: "2%",
              backgroundColor: "#2D2D2D",
              boxShadow: "20px 20px 50px grey",
            }}
          >
            <CardDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
