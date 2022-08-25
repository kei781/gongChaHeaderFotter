import React from "react";
import styles from "./Event.module.css";

function Menu02() {
  return (
    <div>
      <div className={styles.Leediv1}>
        <div className={styles.Leedivpi1}>
          <img
            className={styles.Leeimg12}
            src="https://www.gong-cha.co.kr/uploads/board/20220809/uPCk1jKRS8eglsJ7_20220809.jpg"
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
      <div className={styles.Leediv1}>
        <div className={styles.Leedivpi1}>
          <img
            className={styles.Leeimg12}
            src="https://www.gong-cha.co.kr/uploads/board/20220805/yPK6NXUDzr2ILbpC_20220805.jpg"
            alt=""
          />
          <div className={styles.Leedivpi23}>
            <p className={styles.Leepp}>요기요 4,000원 할인</p>
            <p className={styles.Leepp3}>
              2022년 08월 08일(월) ~ 2022년 08월 14일(일)
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
      <div className={styles.Leediv1}>
        <div className={styles.Leedivpi1}>
          <img
            className={styles.Leeimg12}
            src="https://www.gong-cha.co.kr/uploads/board/20220801/x4YKXblsG9MhStLa_20220801.jpg"
            alt=""
          />
          <div className={styles.Leedivpi23}>
            <p className={styles.Leepp}>
              스페셜 커피 신메뉴 마시면, 스탬프 x3배 적립!종료
            </p>
            <p className={styles.Leepp3}>
              2022년 08월 04일(목) ~ 2022년 08월 14일(일)
            </p>
            <p>
              <a className={styles.Leepp1} href="">
                자세히 보기 {">"}
              </a>
            </p>
          </div>
        </div>
        <div className={styles.Leeasdasd}>s</div>
        <p className={styles.Leecc}></p>
        <div className={styles.LeeButton1}>
          <button className={styles.LeeButton2}> 더보기 </button>
        </div>
      </div>
    </div>
  );
}
export default Menu02;
