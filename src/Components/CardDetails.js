import React, { Component } from "react";
import MasterLogo from "../assests/Mastercard.jpg";
import MasterCard from "../assests/grayCard.png";
import "./CardDetails.css";

class CardDetails extends Component {
  state = {
    name: "John Smith",
    cNumber: "5412123456789010",
    cvv: "222",
    inputMonth: "1",
    inputYear: "2021",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
  };
  render() {
    const optionStyle = {
      backgroundColor: "#2d2d2d",
      color: "white",
      border: "none",
    };

    const borderBottom = {
      border: "none",
      borderBottom: "1px solid #CCCCCC",
      backgroundColor: "rgb(45, 45, 45)",
      color: "white",
      borderRadius: 0,
    };
    return (
      <div className="container ">
        <h4 style={{ marginTop: "10%", marginBottom: "10%" }}>Card Details</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <small style={{ marginBottom: "5%" }}>Card Type</small>
            <div className="col-6">
              <img id="masterCard" src={MasterCard} alt="Master Card"></img>
            </div>
            <div className="col-5">
              <img id="masterLogo" src={MasterLogo} alt="Logo"></img>
            </div>
          </div>
          <div className="mb-3">
            <label>Name on Card</label>

            <input
              name="name"
              className="form-control form-control-sm shadow-none"
              style={borderBottom}
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <div className="mb-3">
            <label>Card Number</label>
            <input
              name="cNumber"
              className="form-control form-control-sm shadow-none"
              style={borderBottom}
              onChange={this.handleChange}
              value={this.state.cNumber}
            />
          </div>

          <div className="row">
            <div className="col-9">
              <label>Expiration Date</label>
              <div className="row">
                <div className="col-4">
                  <select
                    name="inputMonth"
                    className="form-select form-select-sm shadow-none"
                    value={this.state.inputMonth}
                    onChange={this.handleChange}
                    style={optionStyle}
                  >
                    <option>mm</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="col-5">
                  <select
                    name="inputYear"
                    className="form-select form-select-sm shadow-none"
                    value={this.state.inputYear}
                    onChange={this.handleChange}
                    style={optionStyle}
                  >
                    <option>yyyy</option>

                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-3">
              <label>cvv</label>
              <input
                name="cvv"
                className="form-control form-control-sm shadow-none"
                style={borderBottom}
                onChange={this.handleChange}
                value={this.state.cvv}
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-sm btn-block"
            style={{ marginTop: "5%", marginBottom: "5%", width: "100%" }}
          >
            Check Out
          </button>
        </form>
      </div>
    );
  }
}

export default CardDetails;
