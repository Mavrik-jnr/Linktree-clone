import React from "react";
import styles from "./styles/contact.module.css";
import Input from "../components/Input";
import Button from "../components/Button";

function Contact() {
  return (
    <div className={styles.Contact}>
      <div className={styles.headings}>
        <h3>Contact Me</h3>
        <h4>Hi there, contact me to ask me about anything you have in mind</h4>
      </div>
      <form className={styles.form}>
        <Input
          id={"first_name"}
          type={"First Name"}
          parentClass={styles.first}
          inputPlaceholder={"Enter your first name"}
        />
        <Input
          id={"last_name"}
          type={"Last Name"}
          parentClass={styles.last}
          inputPlaceholder={"Enter your last name"}
        />
        <Input
          id={"email"}
          type={"Email"}
          parentClass={styles.email}
          inputPlaceholder={"yourname@email.com"}
        />
        <Input
          id={"message"}
          type={"message"}
          inputPlaceholder={
            "Send me a message and i'll reply you as soon as possible..."
          }
        />
        <Input id={"agreement"} type={"agreement"} />
        <Button />
      </form>
    </div>
  );
}

export default Contact;
