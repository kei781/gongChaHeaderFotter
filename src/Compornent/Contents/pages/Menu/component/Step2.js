import React from "react";
import styles from "./Step2.module.css";
import img1 from "./img/order_method_img2_1.gif";
import img2 from "./img/order_method_img2_2.gif";
import img3 from "./img/order_method_img2_4.gif";
import img4 from "./img/order_method_img2_3.gif";
import img5 from "./img/order_method_img2_5.gif";
import img6 from "./img/order_method_img2_6.gif";
const Step2 = () => {
  return (
    <>
      <div className={styles.step_2}>
        <div className={styles.step_body}>
          <div className={styles.step_text} data-aos="fade-right">
            <p>STEP 02</p>
            <p>TOPPINGS</p>
            <p>
              6가지 토핑 중<br />
              원하는 토핑을 선택하세요.
              <br />
              (최대 3가지 선택 가능)
            </p>
          </div>
          <div className={styles.step_imgbox} data-aos="fade-left">
            <ul className={styles.step_img}>
              <li>
                <p className={styles.teaname}>밀크폼</p>
                <p className={styles.teaeng}>Milk Foam</p>
                <img src={img1} alt="" />
                <p className={styles.teatext}>
                  깊고 부드러운 맛을 내는
                  <br />
                  달콤 짭쪼름한 토핑
                </p>
              </li>
              <li>
                <p className={styles.teaname}>펄(타피오카)</p>
                <p className={styles.teaeng}>Pearl</p>
                <img src={img2} alt="" />
                <p className={styles.teatext}>
                  카사바 뿌리의 녹말로 만든
                  <br />
                  쫀득쫀득한 식감의 토핑
                </p>
              </li>
              <li>
                <p className={styles.teaname}>코코넛</p>
                <p className={styles.teaeng}>Coconut</p>
                <img src={img3} alt="" />
                <p className={styles.teatext}>
                  달콤한 코코넛으로 만들어진
                  <br />
                  쫄깃쫄깃한 젤리
                </p>
              </li>
              <li>
                <p className={styles.teaname}>알로에</p>
                <p className={styles.teaeng}>Aloe</p>
                <img src={img4} alt="" />
                <p className={styles.teatext}>
                  신선하고
                  <br />
                  사각사각한 토핑
                </p>
              </li>
              <li>
                <p className={styles.teaname}>화이트펄</p>
                <p className={styles.teaeng}>White Pearl</p>
                <img src={img5} alt="" />
                <p className={styles.teatext}>
                  해초추출물로 만들어
                  <br />
                  꼬들꼬들한 토핑
                </p>
              </li>
              <li>
                <p className={styles.teaname}>치즈폼</p>
                <p className={styles.teaeng}>Cheese Foam</p>
                <img src={img6} alt="" />
                <p className={styles.teatext}>
                  진한 치즈 풍미를 더해
                  <br />
                  감칠맛이 나는 달콤 짭조름한 토핑
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
