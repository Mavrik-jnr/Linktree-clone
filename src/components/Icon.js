import React from "react";
import styles from "./styles/share.module.css";
import share from "../images/Share.svg";
import dot from "../images/Dots.svg";
import shareLink from "../images/shareTool.svg";
import shape from "../images/Shape.svg";
import useWindowDimensions from "../useWindow";
// import icon2 from "../images/share-06.svg";

function Share({ type, device, parentStyle }) {
  const { width } = useWindowDimensions();
  return (
    <div
      tabIndex={1}
      type={width <= 760 && type}
      device={device}
      className={`${parentStyle} ${styles.icon}`}
    >
      <img src={width <= 760 ? dot : share} className={styles.arrow} alt="" />
      <img className={styles.shareLink} src={shareLink} alt="" />
      <img src={shape} className={styles.cursor} alt="" />
    </div>
  );
}

export default Share;
