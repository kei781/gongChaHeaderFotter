import React from "react";
import styles from "./Event.module.css";

function Menu01() {
  return (
    <div>
      <div className={styles.Leediv1}>
        <div className={styles.Leedivpi1}>
          <img
            className={styles.Leeimg12}
            src="https://www.gong-cha.co.kr/uploads/editor/20220810/ruAyaets1m6KY47g_20220810.jpg"
            alt=""
          />
          <div className={styles.Leedivpi23}>
            <p className={styles.Leepp}>
              학생증만 있으면, 제조 음료 구매 시 블랙/타로 밀크티 1,000원!
            </p>
            <p className={styles.Leepp3}>
              2022년 08월 12일(금) ~ 2022년 08월 26일(금)
            </p>
            <p>
              <a className={styles.Leepp1} href="">
                자세히 보기 {">"}
              </a>
            </p>
          </div>
        </div>
        <div className={styles.Leeasdasd}>s</div>
      </div>
    </div>
  );
}
export default Menu01;
