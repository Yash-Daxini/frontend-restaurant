import React from "react";

const FormInput = ({ labelValue, inputType }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{labelValue}</label>
      <input
        type={inputType}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default FormInput;
