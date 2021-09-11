import React from "react";

const FormField = ({ input, label, type, required, meta: {error, touched} }) => {
  // console.log(error);
  return (
    <div className="form-group">
      <label className="title">{label}</label>
      <input
        type={type}
        required={required}
        {...input}
        className="form-control"
      />
      {error && touched && (
        <div className="mt-2 text-danger title">{error}</div>
      )}
    </div>
  );
};

export default FormField;
