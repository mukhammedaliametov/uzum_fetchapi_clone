import React from "react";
import TopHeader from "./TopHeader";
import CenterHeader from "./CenterHeader";
import Bottom from "./Bottom";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <TopHeader />
        <CenterHeader />
        <Bottom />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
