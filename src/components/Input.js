import React, { useState } from "react";
import styles from "./styles/input.module.css";

function Input({ type, inputPlaceholder, id, parentClass }) {
  const [toggle, setToggle] = useState(false);
  if (type === "message") {
    return (
      <fieldset className={styles.message}>
        <label htmlFor={type}>Message</label>
        <textarea
          rows={5}
          id={type}
          placeholder={inputPlaceholder}
          required
        ></textarea>
      </fieldset>
    );
  } else if (type === "agreement") {
    return (
      <fieldset className={styles.checkbox}>
        <input
          type="checkbox"
          toggle={toggle ? "toggle" : ""}
          onClick={() => setToggle(!toggle)}
          id={id}
        />
        <label htmlFor={id}>
          You agree to providing your data to MMTobi who may contact you
        </label>
      </fieldset>
    );
  }
  return (
    <fieldset className={`${styles.input} ${parentClass}`}>
      <label htmlFor={id}>{type}</label>
      <input
        id={id}
        type={type === "Email" ? "email" : "text"}
        placeholder={inputPlaceholder}
        alt={type}
        required
      />
    </fieldset>
  );
}

export default Input;
