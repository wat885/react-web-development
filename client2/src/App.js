import "./App.css";
import React, { Component } from "react";
import { BrowserRouter , Route , Switch} from "react-router-dom"
import Home from "./containers/Home"
import About from "./containers/About"
import Order from "./containers/order/Order"
import Product from "./containers/product/Product";
import ProductEdit from "./containers/product/ProductEdit";
import NotFound from "./containers/error/NotFound";


// json-server --watch resources/data/db.json --port 3001


class App extends Component {

  renderRouter() {
    return (
      <Switch>
        {/* exact คือต้องเป็นแบบใน path=" "เป๊ะๆเท่านั้น */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        
        <Route exact path="/products/add" component={ProductEdit} />
				<Route exact path="/products/edit/:id" component={ProductEdit} />


        <Route component={NotFound} />
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
