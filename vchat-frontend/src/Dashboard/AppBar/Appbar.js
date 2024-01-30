import React from "react";
import { Link } from "react-router-dom";
import "./Appbar.css";
import menu from "../../assets/icons/menu-icon.svg";
import { logout } from "../../authPages/Logout/auth";
import ChosenOptionLabel from "./ChosenOptionLabel";
import { getActions } from "../../store/actions/roomActions";
import { connect } from "react-redux";

const Appbar = ({ audioOnly, setAudioOnly }) => {
  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };

  return (
    <div className="appbar_main">
      <ChosenOptionLabel />
      <div className="dropdown">
        <img src={menu} alt="Menubar" id="dropdown_img" />
        <div className="menu_content">
          <Link onClick={logout}>Logout</Link>
          <Link onClick={handleAudioOnlyChange}>
            {audioOnly ? "Audio Only Enabled" : "Audio Only Disabled"}
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Appbar);
