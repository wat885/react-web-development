import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormField } from "./formFields";

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
        <form>
          {this.renderFields(productFormField)}
          <button className="btn btn-block btn-info title" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    );
  }
}

// ผูก component กับ reduxForm
ProductForm = reduxForm({ form: "productForm" })(ProductForm);

export default ProductForm;
