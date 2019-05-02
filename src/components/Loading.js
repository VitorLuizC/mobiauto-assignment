import "./Loading.css";
import React from "react";

function Loading({ message }) {
  return (
    <div className="Loading">
      <figure className="spinner" />
      <p className="message">{message || "Carregando..."}</p>
    </div>
  );
}

export default Loading;
