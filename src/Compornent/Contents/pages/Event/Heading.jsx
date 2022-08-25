import React from "react";
import { Link } from "react-router-dom";
import styles from "./Event.module.css";

function Heading() {
  return (
    <div>
      <img
        className={styles.Leeimg1}
        src="https://www.gong-cha.co.kr/view/gongcha/images/common/page_top_visual_event.jpg"
        alt=""
      />
      <div className={styles.Leediv1}>
        <li className={styles.Leeli}>
          <Link to="/Event/Menu01">진행중인 이벤트</Link>
        </li>
        <li className={styles.Leeli}>
          <Link to="/Event/Menu02">종료된 이벤트</Link>
        </li>
        <li className={styles.Leeli}>
          <Link to="/Event/Menu03">당첨자 발표</Link>
        </li>
        <div className={styles.Leediv2}>s</div>
      </div>
    </div>
  );
}
export default Heading;
