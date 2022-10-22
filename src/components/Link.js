import React from "react";
import styles from "./styles/link.module.css";
// import "../index.css";

function Link({ link, text, linkState }) {
  return (
    <a id={styles.a} state={linkState} href={link}>
      {text}
    </a>
  );
}

export default Link;
