import React, { useEffect, useRef } from "react";
import Appbar from "./AppBar/Appbar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import SideBar from "./SideBar/SideBar";
import "./Dashboard.css";
import { logout } from "../authPages/Logout/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../RealTimeCommunication/socketConnection";

const Dashboard = ({ setUserDetails }) => {
  const isMounted = useRef(false);
  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      if (!isMounted.current) {
        isMounted.current = true;
        console.log("dd");
        setUserDetails(JSON.parse(userDetails));
        connectWithSocketServer(JSON.parse(userDetails));
      }
    }
  }, []);

  return (
    <div className="dashboard_main">
      <SideBar />
      <FriendsSideBar />
      <div className="board_content">
        <Appbar />
        <Messenger />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
