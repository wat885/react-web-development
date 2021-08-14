import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() }); //เมือมีการเรียก setState จะไปเรียก render ต่อ
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-start">
            <h1 className="text-success">
              <img src="/images/logo/logo.png" alt="" />
              เฮลตี้ คาเฟ่{" "}
            </h1>
          </div>
          <div className="col-md-4 text-end">
            <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
