import React from "react";
import "./Room.css";
import CameraButton from "./RoomButtons/CameraButton";
import CloseRoomButton from "./RoomButtons/CloseRoomButton";
import MicButton from "./RoomButtons/MicButton";
import ScreenShareButton from "./RoomButtons/ScreenShareButton";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/roomActions";

const RoomButtons = (props) => {
  const { localStream, isUserJoinedWithOnlyAudio } = props;

  return (
    <div className="room_btns_main">
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <MicButton localStream={localStream} />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
      <CloseRoomButton />
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
export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButtons);
