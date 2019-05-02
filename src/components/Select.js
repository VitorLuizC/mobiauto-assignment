import "./Select.css";
import React, { useState } from "react";
import Modal from "./Modal";
import CaretDown from "../assets/icons/Caret-Down.svg";

/**
 * @typedef Option
 * @property {string} text
 * @property {string} value
 */

/**
 * Creates a match function to compare option with term.
 * @param {string} term - A search term to be compared.
 * @returns {(option:Option) => boolean}
 */
function optionMatchesTerm(term) {
  return option => option.text.toLowerCase().includes(term.toLocaleLowerCase());
}

function Select({ label, options, value, onChange, placeholder }) {
  const [term, setTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const option = options.find(option => option.value === value);

  const onClose = () => {
    setTerm("");
    setIsOpen(false);
  };

  return (
    <div className="Select">
      <p className="label">{label}</p>
      <div className="field" onClick={() => setIsOpen(true)}>
        {option ? (
          <span className="value">{option.text}</span>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}

        <img className="caret" src={CaretDown} alt="Abrir" title="Abrir" />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="Select-modal-content">
          <div className="filter">
            <input
              type="text"
              value={term}
              onChange={event => setTerm(event.target.value)}
              className="input"
              placeholder="Pesquisar entre as opções"
            />
          </div>

          <ul className="options">
            {options.filter(optionMatchesTerm(term)).map(({ text, value }) => {
              const isActive = option && option.value === value;

              return (
                <li
                  key={value}
                  onClick={() => {
                    onClose();
                    onChange(value);
                  }}
                  className={`option${isActive ? " -active" : ""}`}
                >
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Select;
