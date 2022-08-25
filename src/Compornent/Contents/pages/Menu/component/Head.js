import React from "react";
import styles from "./Head.module.css";
const Head = () => {
  return (
    <>
      <div className={styles.pageTop}>
        <div className={styles.page}>
          <h2 className={styles.pageHeadtext}>HOW TO ORDER</h2>
          <p className={styles.pageBodytext}>
            취향에 맞게 토핑, 당도, 얼음량까지 맞춤 주문이 가능합니다
          </p>
        </div>
      </div>
    </>
  );
};

export default Head;
