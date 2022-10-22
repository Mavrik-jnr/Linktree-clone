import React from "react";
import "./styles/link.module.css";

function Link({ link, text }) {
  return <a href={link}>{text}</a>;
}

export default Link;
