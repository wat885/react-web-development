import "./App.css";
import React, { Component } from "react";
import { BrowserRouter , Route , Switch} from "react-router-dom"
import Home from "./containers/Home"
import About from "./containers/About"

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        {/* exact คือต้องเป็นแบบใน path=" "เท่านั้น */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
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
