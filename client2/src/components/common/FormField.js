import React from "react";

const FormField = ({ input, label, type, required, meta }) => {
  console.log(meta)
  return (
    <div className="form-group">
      <label className="title">{label}</label>
      <input
        type={type}
        required={required}
        {...input}
        className="form-control"
      />

    </div>
  );
};

export default FormField;
