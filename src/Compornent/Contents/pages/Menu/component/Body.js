import React from "react";
import styles from "./Body.module.css";
import img from "./img/order_method_head_visual.png";
import img1 from "./img/location_brand_home.png";
import img2 from "./img/location_brand_arr.png";
const Body = () => {
  return (
    <>
      <div className={styles.pageBody}>
        <div className={styles.redbox}>
          <a href="/">
            <img src={img1} alt="" className={styles.home} />
          </a>
          <img src={img2} alt="" className={styles.arrow} />
          <a href="#" className={styles.menu}>
            <span>메뉴</span>
          </a>
          <img src={img2} alt="" className={styles.arrow} />
          <span className={styles.orderMenu}>주문방법</span>
        </div>
        <div className={styles.headText} data-aos="fade-right">
          공차가 처음이신가요?
        </div>
        <p className={styles.bodyText} data-aos="fade-right">
          공차는 오리지널 티(Tea)와 밀크티, 스무디, 과일믹스 등의 메뉴를
          베이스로
          <br />
          5가지 당도와 얼음량, 토핑까지 선택할 수 있어 취향에 따라
          커스터마이징하여 주문 가능합니다.
          <br />
          <span className={styles.textRed} data-aos="fade-right">
            약 600여 가지의 다양한 조합으로 음료를 즐길 수 있습니다.
          </span>
        </p>
        <img
          data-aos="fade-right"
          className={styles.order_method_head_visual}
          src={img}
          alt=""
        />
      </div>
    </>
  );
};

export default Body;
