import React, { Component } from "react";
import "./ItemCard.css";
import { connect } from "react-redux";
import { Increment, Decrement, Remove } from "../actions/Actions";

class ItemCard extends Component {
  constructor(props) {
    super(props);
  }

  increment = (id) => {
    this.props.Increment(id);
  };
  decrement = (id) => {
    this.props.Decrement(id);
  };
  remove = (id) => {
    this.props.Remove(id);
  };
  render() {
    return (
      <table className="table">
        <tbody>
          <tr className="col-md-11">
            <td className="col-md-2">
              <img
                className="img-fluid img-thumbnail"
                src={this.props.image}
                alt={this.props.name}
                style={{ borderRadius: "50%" }}
              />
            </td>
            <td className="col-md-3">
              <span sytle={{ verticalAlign: "middle" }}>{this.props.name}</span>
            </td>
            <td className="col-md-2">
              <button
                className="bg-transparent pointer"
                style={{ borderStyle: "none" }}
                onClick={this.decrement.bind(this, this.props.name)}
              >
                -
              </button>
              <input
                type="text"
                style={{ width: "30%", textAlign: "center" }}
                value={this.props.amount}
                readOnly="readonly"
              />
              <button
                className="bg-transparent pointer"
                style={{ borderStyle: "none" }}
                onClick={this.increment.bind(this, this.props.name)}
              >
                +
              </button>
            </td>
            <td className="col-md-2">
              <sup>
                <i className="fas fa-dollar-sign" />
              </sup>{" "}
              <span>{this.props.price}</span>
            </td>
            <td className="col-md-2">
              <span>
                <i
                  className="fas fa-times pointer"
                  onClick={this.remove.bind(this, this.props.name)}
                ></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cartR.items,
});
export default connect(mapStateToProps, { Increment, Decrement, Remove })(
  ItemCard
);
