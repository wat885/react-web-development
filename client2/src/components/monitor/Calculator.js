import React, { Component } from "react";

export class Calculator extends Component {
  render() {
    return (
      <div>
        <h1>340.0</h1>
        <hr />
        <ul className="list-unstyled">
          <li className="text-end text-success title">
            บิงซู x 1 = 200.0
            <button className="btn btn-light btn-sm">x</button>
          </li>
          <li className="text-end text-success title">
            เฟชนฟราย x1 = 140.0
            <button className="btn btn-light btn-sm">x</button>
          </li>
        </ul>
        <hr />
        <button className="btn btn-danger title d-md-block ">ยืนยัน</button>
        <button className="btn btn-secondary title d-md-block ">ยกเลิก</button>
      </div>
    );
  }
}

export default Calculator;
