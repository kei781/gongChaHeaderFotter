import React from "react";
import Heading from "./Heading";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <div>
      <Heading />
      <Outlet />
    </div>
  );
};

export default Event;
