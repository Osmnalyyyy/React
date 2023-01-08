import React from "react";

import MobileMenu from "./mobile-menu/MobileMenu";
import "./Header.css";
import Avatar from "./avatar/Avatar";
import Name from "./name/Name";
import SocialIcons from "./social-icons/SocialIcons";
import MainNavbar from "./main-navbar/MainNavbar";
import CopyRight from "./copy-right/CopyRight";

const Header = () => {
  return (
    <header className="header pull-left">
      <Avatar />
      <MobileMenu />
      <Name />
      <SocialIcons />
      <MainNavbar />
      <CopyRight />
    </header>
  );
};
export default Header;
