import React from "react";

import MobileMenu from "./mobile-menu/MobileMenu";
import "./Header.css";
import Avatar from "./avatar/Avatar";

const Header = () => {
  return (
    <header className="header pull-left">
      <Avatar />
      <MobileMenu />
    </header>
  );
};
export default Header;
