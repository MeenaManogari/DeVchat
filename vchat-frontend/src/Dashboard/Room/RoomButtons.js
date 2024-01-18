import React from "react";
import "./Room.css";
import CameraButton from "./RoomButtons/CameraButton";
import CloseRoomButton from "./RoomButtons/CloseRoomButton";
import MicButton from "./RoomButtons/MicButton";
import ScreenShareButton from "./RoomButtons/ScreenShareButton";

const RoomButtons = () => {
  return (
    <div className="room_btns_main">
      <ScreenShareButton />
      <MicButton />
      <CameraButton />
      <CloseRoomButton />
    </div>
  );
};

export default RoomButtons;
