import React from "react";
import alert from "../assets/icons/alert-icon.png";
import { getActions } from "../store/actions/alertActions";
import { connect } from "react-redux";
import "./Notifications.css";

const Notifications = ({
  openAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <div className="notify_main">
      <img src={alert} alt="Alert Message" />
      <h5>{alertMessageContent}</h5>
    </div>
  );
};

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(mapStoreStateToProps, mapActionsToProps)(Notifications);
