import React from "react";
import styles from "./Step3.module.css";
import img1 from "./img/order_method_img3_1.jpg";
import img2 from "./img/order_method_img3_2.jpg";

const Step3 = () => {
  return (
    <>
      <div className={styles.step_3}>
        <div className={styles.step_text} data-aos="fade-right">
          <p>STEP 03</p>
          <p>
            SWEET &<br /> ICE GRADE
          </p>
          <p>당도와 얼음량을 원하시는 만큼 조절하세요.</p>
        </div>
        <div className={styles.step_img} data-aos="fade-left">
          <p>당도 선택</p>
          <div>
            <img src={img1} alt="" />
          </div>
          <p>당도 선택</p>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
