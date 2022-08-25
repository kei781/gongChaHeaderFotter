import style from "./Store.module.css";
import Map from "./compornents/Map";

function Park() {
  return (
    <div classname={style.main}>
      <div className={style.pageTop2370}>
        <div className={style.pagegroup2370}>
          <h2 className={style.tit_eng2370}>STORE</h2>
          <p className={style.sss2370}>간편하게 공차의 매장을 검색해 보세요.</p>
        </div>
      </div>
      <div className={style.store2370}>
        <div className={style.search_board2370}>
          <input type="hidden" />
          <select classname={style.sido} style={{ width: "280px" }}>
            <option>시/도</option>
            <option>서울특별시</option>
            <option>부산광역시</option>
            <option>대구광역시</option>
            <option>인천광역시</option>
            <option>광주광역시</option>
            <option>대전광역시</option>
          </select>
          <select className={style.gugun} style={{ width: "280px" }}>
            <option>구/군</option>
            <option>대덕구</option>
            <option>동구</option>
            <option>서구</option>
            <option>중구</option>
            <option>유성구</option>
          </select>
          <div className={style.box} style={{ width: "560px" }}>
            <input
              style={{ width: "250px" }}
              type="text"
              placeholder="매장명 또는 주소를 입력하세요."
            />
            <input type="submit" value="검색" />
          </div>
        </div>
        <div className={style.wrap}>
          <div className={style.list}>
            <div className={style.mCSB}>
              <div
                className={style.mCSN}
                style={{
                  position: "relative",
                  top: "0px",
                  left: "0px",
                }}
              >
                <ul className={style.ulu}>
                  <li className={style.lil}>
                    <a
                      href="http://localhost:3000/store"
                      className={style.mejang}
                    >
                      <span className={style.jijum}>둔산타임월드점</span>
                      <span className={style.address}>
                        대전광역시 서구 둔산동 986번지
                      </span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="http://localhost:3000/store"
                      className={style.mejang}
                    >
                      <span className={style.jijum}>한남대점</span>
                      <span className={style.address}>
                        대전광역시 대덕구 오정동 223-267
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Park;
