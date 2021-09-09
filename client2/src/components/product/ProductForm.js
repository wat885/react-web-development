import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormFields } from "./formFields";

export class ProductForm extends Component {
  renderFields(formFields) {
    return formFields.map(({ label, name, type, required }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          required={required}
          component={FormField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <from>{this.renderFields(productFormFields)}</from>
        <button className="btn btn-block btn-info title">บันทึก</button>
      </div>
    );
  }
}

// ผูก component กับ reduxForm
ProductForm = reduxForm({ form: "productFrom" })(ProductForm);

export default ProductForm;
