import React from "react";
import logo from "../images/gigachad.jpg";
import styles from "./styles/profile.module.css";
import cameraIcon from "../images/camera-01.svg";
function Profile() {
  return (
    <>
      <div className={styles.profile}>
        <img
          id="profile__img"
          className={styles.profile__img}
          src={logo}
          alt="Profile"
        />
        <img src={cameraIcon} className={styles.cam} alt="" />
      </div>
    </>
  );
}

export default Profile;
