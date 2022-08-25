import React, { useEffect, useState } from "react";
import styles from "./Step1.module.css";
import img1 from "./img/order_method_img1_1.png";
import img2 from "./img/order_method_img1_3.png";
import img3 from "./img/order_method_img1_4.png";
import img4 from "./img/order_method_img1_6.png";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Step1 = () => {
  return (
    <>
      <div className={styles.step_1}>
        <div className={styles.step_text} data-aos="fade-right">
          <p>STEP 01</p>
          <p>TEA MENU</p>
          <p>취향에 맞게 공차의 음료를 고르세요.</p>
        </div>
        <div className={styles.step_img} data-aos="fade-left">
          <div>
            <img src={img1} alt="" />
            <p className={styles.teaname}>오리지널 티</p>
            <p className={styles.teaeng}>(Hot & Iced)</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className={styles.teaname}>밀크티</p>
            <p className={styles.teaeng}>(Hot & Iced)</p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p className={styles.teaname}>과일믹스</p>
            <p className={styles.teaeng}>(Hot & Iced)</p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p className={styles.teaname}>쥬얼리</p>
            <p className={styles.teaeng}>(Iced only)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
