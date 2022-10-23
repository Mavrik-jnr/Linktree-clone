import React, { useState } from "react";
import styles from "./styles/link.module.css";
// import "../index.css";

function Link({ link, text, linkState, ID }) {
  //READ THIS GOD FORSAKEN CODE AGAIN TODAY
  const [swipe, setSwipe] = useState("");
  //   const [touchStart, setTouchStart] = useState(null)
  // const [touchEnd, setTouchEnd] = useState(null)

  // // the required distance between touchStart and touchEnd to be detected as a swipe
  // const minSwipeDistance = 50

  // const onTouchStart = (e) => {
  //   setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  //   setTouchStart(e.targetTouches[0].clientX)
  // }

  // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  // const onTouchEnd = () => {
  //   if (!touchStart || !touchEnd) return
  //   const distance = touchStart - touchEnd
  //   const isLeftSwipe = distance > minSwipeDistance
  //   const isRightSwipe = distance < -minSwipeDistance
  //   if (isLeftSwipe || isRightSwipe){}
  //   // add your conditional logic here
  // }
  return (
    <a
      id={ID}
      className={` ${swipe} ${styles.a}`}
      state={linkState}
      href={link}
      onTouchMove={() => {
        setSwipe(styles.swipe);
      }}
    >
      {text}
    </a>
  );
}

export default Link;
