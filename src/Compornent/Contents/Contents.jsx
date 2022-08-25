import React from "react";
import style from "./Contents.module.css";
import Brand from "./pages/Brand/Brand";
import Menu from "./pages/Menu/Menu";
import Store from "./pages/Store/Store";
import Membership from "./pages/Membership/Membership";
import Benefit from "./pages/Benefit/Benefit";
import Event from "./pages/Event/Event";
import Menu01 from "./pages/Event/Menu01";
import Menu02 from "./pages/Event/Menu02";
import Menu03 from "./pages/Event/Menu03";
import { Routes, Route } from "react-router-dom";

const Contents = () => {
  return (
    <div className={style.Contents}>
      <Routes>
        <Route path="" element={<Brand />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Benefit" element={<Benefit />} />
        <Route path="/Event" element={<Event />}>
          <Route path="/Event/Menu01" element={<Menu01 />}></Route>
          <Route path="/Event/Menu02" element={<Menu02 />}></Route>
          <Route path="/Event/Menu03" element={<Menu03 />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Contents;
