import uuid from "uuid/v4";
import React from "react";

function SelectOption({ text, value }) {
  return (
    <option key={value} value={value}>
      {text}
    </option>
  );
}

function Select({ label, options, value, onChange, placeholder }) {
  const id = "select-" + uuid();

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option disabled>{placeholder}</option>
        {options.map(SelectOption)}
      </select>
    </fieldset>
  );
}

export default Select;
