import React from "react";
import styles from "./styles/icon.module.css";
import share from "../images/Share.svg";
import dot from "../images/Dots.svg";
import shareLink from "../images/shareTool.svg";
import shape from "../images/Shape.svg";
import useWindowDimensions from "../useWindow";

function Icon({ type, device, parentStyle, swiped }) {
  const { width } = useWindowDimensions();
  return (
    <div
      tabIndex={1}
      type={width <= 760 && type}
      device={device}
      className={`${parentStyle} ${styles.icon}`}
      swiped={swiped}
    >
      <img
        src={width <= 760 && device !== "mobile" ? dot : share}
        className={styles.arrow}
        alt=""
      />
      <img className={styles.shareLink} src={shareLink} alt="" />
      <img src={shape} className={styles.cursor} alt="" />
    </div>
  );
}

export default Icon;
