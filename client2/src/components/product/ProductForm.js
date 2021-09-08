import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

export class ProductForm extends Component {
  renderFields() {
    const formFields = [
      { name: "productName", type: "text" },
      { name: "unitPrice", type: "number" },
      { name: "thumbnail", type: "text" },
    ];
    return formFields.map(({ name, type }) => {
      return <Field name={name} type={type} component="input" />;
    });
  }
  

  render() {
    return (
      <div>
        <from>{this.renderFields()}</from>
      </div>
    );
  }
}

// ผูก component กับ reduxForm
ProductForm = reduxForm({ form: "productFrom" })(ProductForm);

export default ProductForm;
