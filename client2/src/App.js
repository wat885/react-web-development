import "./App.css";
import React, { Component } from "react";
import { BrowserRouter , Route , Switch} from "react-router-dom"
import Home from "./containers/Home"
import About from "./containers/About"
import Order from "./containers/order/Order"

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        {/* exact คือต้องเป็นแบบใน path=" "เป๊ะๆเท่านั้น */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}
export default App;
