import React from "react";
import { Link } from "react-router-dom";
import "./Appbar.css";
import menu from "../../assets/icons/menu-icon.svg";
import { logout } from "../../authPages/Logout/auth";
import ChosenOptionLabel from "./ChosenOptionLabel";

const Appbar = () => {
  return (
    <div className="appbar_main">
      <ChosenOptionLabel />
      <div className="dropdown">
        <img src={menu} alt="Menubar" id="dropdown_img" />
        <div className="menu_content">
          <Link onClick={logout}>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
