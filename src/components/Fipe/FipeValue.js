import "./FipeValue.css";
import React from "react";
import Loading from "../Loading";

function FipeValue({ value, isVisible = true, isLoading, loadingMessage }) {
  return (
    <div className="FipeValue">
      {!isVisible ? null : isLoading ? (
        <Loading message={loadingMessage} />
      ) : (
        <strong className="value">{value}</strong>
      )}
    </div>
  );
}

export default FipeValue;
