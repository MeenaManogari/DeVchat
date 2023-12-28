import React from "react";
import GroupIcon from "../../assets/icons/group-icon.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar_main">
      <button>
        <img src={GroupIcon} alt="Friend group" />
      </button>
    </div>
  );
};

export default SideBar;
