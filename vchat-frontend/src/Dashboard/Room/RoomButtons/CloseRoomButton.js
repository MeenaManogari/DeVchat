import React from "react";
import "./RoomButtons.css";
import { IoMdClose } from "react-icons/io";
import * as roomHandler from "../../../RealTimeCommunication/roomHandler";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom();
  };

  return (
    <div className="cam_btn">
      <button onClick={handleLeaveRoom}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default CloseRoomButton;
