import React from "react";
import logo from "../images/gigachad.jpg";
import "./styles/profile.module.css";
function Profile() {
  return (
    <>
      <a href="/" id="hi">
        omo
      </a>
      <div className="profile">
        <img id="profile__img" src={logo} alt="" />
      </div>
    </>
  );
}

export default Profile;
