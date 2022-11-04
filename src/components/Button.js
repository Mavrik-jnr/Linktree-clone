import React from "react";
import "./styles/button.module.css";

function Button({ id }) {
  return (
    <button id={id} type="submit">
      Send message
    </button>
  );
}

export default Button;
