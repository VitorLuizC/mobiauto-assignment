import "./FipeFilter.css";
import React from "react";
import Select from "../Select";
import Loading from "../Loading";

/**
 * @typedef FipeFilterOption
 * @property {string} nome
 * @property {string} codigo
 */

/**
 * Transform Fipe filter option to Select option.
 * @param {FipeFilterOption} option
 * @returns {import('../Select').Option}
 */
function toOption({ nome, codigo }) {
  return {
    text: nome,
    value: codigo
  };
}

function FipeFilter({
  value,
  options,
  onChange,
  label,
  placeholder,
  isVisible = true,
  isLoading,
  loadingMessage
}) {
  return (
    <div className="FipeFilter">
      {!isVisible ? null : isLoading ? (
        <Loading message={loadingMessage} />
      ) : (
        <Select
          value={value}
          options={options.map(toOption)}
          onChange={onChange}
          label={label}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FipeFilter;
