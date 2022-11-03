import React from "react";
import styles from "./styles/input.module.css";

function Input({ type, inputPlaceholder, id, parentClass }) {
  if (type === "message") {
    return (
      <fieldset className={styles.message}>
        <label htmlFor={type}>Message</label>
        <textarea
          id={type}
          placeholder="Send me a message and i'll reply as soon as possible"
        ></textarea>
      </fieldset>
    );
  } else if (type === "agreement") {
    return (
      <fieldset className={styles.checkbox}>
        <input type="checkbox" id={id} />
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
      />
    </fieldset>
  );
}

export default Input;
