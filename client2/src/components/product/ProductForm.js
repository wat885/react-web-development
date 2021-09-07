import React, { Component } from "react";
import { reduxForm } from "redux-form";

export class ProductForm extends Component {
  render() {
    return (
      <div>
        <from></from>
      </div>
    );
  }
}

// ผูก component กับ reduxForm
ProductForm = reduxForm({ form: "productFrom" })(productFrom);

export default ProductForm;
