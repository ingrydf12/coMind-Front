import React from "react";

const CheckboxGroup = ({ legend, options, name }) => {
  return (
    <fieldset className="fieldset-form">
      <legend>{legend}</legend>
      {options.map((option) => (
        <div key={option.value}>
          <input type="checkbox" id={option.value} name={name} required={option.required} />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxGroup;