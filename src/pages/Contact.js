import React from "react";
import styles from "contact.module.css";
import Input from "../components/Input";

function Contact() {
  return (
    <form className={styles.form}>
      <Input />
    </form>
  );
}

export default Contact;
