import React, { useState } from "react";
import Icon from "./Icon";
import styles from "./styles/link.module.css";
// import "../index.css";

function Link({ link, text, linkState, ID }) {
  const [swipe, setSwipe] = useState("");

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 4) {
      setSwipe(styles.swipe);
    }

    if (touchStart - touchEnd < -4) {
      setSwipe("");
    }
  }
  return (
    <div className={styles.container}>
      <a
        id={ID}
        className={` ${swipe} ${styles.a}`}
        state={linkState}
        href={link}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        {text}
        <Icon parentStyle={styles.share} swiped={swipe} device={"mobile"} />
      </a>
    </div>
  );
}

export default Link;
