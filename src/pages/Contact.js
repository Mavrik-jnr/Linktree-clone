import React from "react";
import styles from "./styles/contact.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Error, setError] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      !Email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) ||
      Message === ""
    ) {
      setError(true);
      setCheck(true);
    } else {
      setError(false);
      setFirstName("");
      setEmail("");
      setLastName("");
      setMessage("");
      setCompleted(true);
      setCheck(false);
    }
  };
  return (
    <div className={styles.Contact}>
      <div className={styles.headings}>
        <h3>Contact Me</h3>
        <h4>Hi there, contact me to ask me about anything you have in mind</h4>
      </div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <Input
          id={"first_name"}
          Error={Error}
          type={"First Name"}
          value={firstName}
          onChange={setFirstName}
          parentClass={styles.first}
          inputPlaceholder={"Enter your first name"}
        />
        <Input
          id={"last_name"}
          Error={Error}
          type={"Last Name"}
          value={lastName}
          onChange={setLastName}
          parentClass={styles.last}
          inputPlaceholder={"Enter your last name"}
        />
        <Input
          id={"email"}
          type={"Email"}
          value={Email}
          Error={Error}
          onChange={setEmail}
          parentClass={styles.email}
          inputPlaceholder={"yourname@email.com"}
        />
        <Input
          id={"message"}
          type={"message"}
          value={Message}
          Error={Error}
          onChange={setMessage}
          inputPlaceholder={
            "Send me a message and i'll reply you as soon as possible..."
          }
        />
        <Input id={"agreement"} type={"agreement"} check={check} />
        <Button />
      </form>
      {completed && <p style={{ color: "green" }}>Message sent</p>}
    </div>
  );
}

export default Contact;
