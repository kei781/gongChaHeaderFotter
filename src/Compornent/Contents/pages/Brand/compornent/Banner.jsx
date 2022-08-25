import React, { useState } from "react";
import style from "./Banner.module.css";
import BannerAd1 from "./Banner/BannerAd1";
import BannerAd2 from "./Banner/BannerAd2";
import BannerAd3 from "./Banner/BannerAd3";
import BannerAd4 from "./Banner/BannerAd4";

const Banner = () => {
  const [selectMenu, setselectMenu] = useState(1);
  const TeaRecipeList = {
    1: <BannerAd1 />,
    2: <BannerAd2 />,
    3: <BannerAd3 />,
    4: <BannerAd4 />,
  };
  const reset = () => {
    if (selectMenu < 1) {
      //왼쪽끝에서 넘어가면 오른쪽으로
      setselectMenu(4);
    }
    if (selectMenu > 4) {
      //오른쪽끝에서 넘어가면 왼쪽으로
      setselectMenu(1);
    }
  };
  return (
    <>
      <div className={style.bannerwrap}>
        <div className={style.banner}>{TeaRecipeList[selectMenu]}</div>
        <ul>
          <li>
            <button
              onClick={() => {
                reset(selectMenu);
                setselectMenu(selectMenu - 1);
                console.log(selectMenu);
              }}
            >
              후진!!
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                reset(selectMenu);
                setselectMenu(selectMenu + 1);
                console.log(selectMenu);
              }}
            >
              전진!!
            </button>
          </li>
        </ul>
      </div>
      <div className={style.bannerMenu}>
        <ul>
          <li>
            <button
              onClick={() => {
                setselectMenu(1);
              }}
            >
              스페셜 커피 신메뉴
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setselectMenu(2);
              }}
            >
              제주 신메뉴
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setselectMenu(3);
              }}
            >
              공차, 골든 펄에 빠지다!
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setselectMenu(4);
              }}
            >
              베스트 콤비네이션
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Banner;
