import React, { useState } from "react";
import styles from "./styles/input.module.css";

function Input({
  type,
  inputPlaceholder,
  id,
  parentClass,
  onChange,
  value,
  Error,
}) {
  const [toggle, setToggle] = useState(false);
  if (type === "message") {
    return (
      <fieldset
        className={`${styles.message} ${
          Error && value === "" ? `${styles.Error} ${styles.msg}` : ""
        } `}
      >
        <label htmlFor={type}>Message</label>
        <textarea
          rows={5}
          id={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={inputPlaceholder}
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
          required
        />
        <label htmlFor={id}>
          You agree to providing your data to MMTobi who may contact you
        </label>
      </fieldset>
    );
  }
  return (
    <fieldset
      className={`${styles.input} ${parentClass} ${
        Error && value === "" ? styles.Error : ""
      } ${
        Error &&
        type === "Email" &&
        !value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
          ? `${styles.Error}
          ${styles.email}`
          : ""
      }`}
    >
      <label htmlFor={id}>{type}</label>
      <input
        id={id}
        type={type === "Email" ? "email" : "text"}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        placeholder={inputPlaceholder}
        alt={type}
      />
    </fieldset>
  );
}

export default Input;
