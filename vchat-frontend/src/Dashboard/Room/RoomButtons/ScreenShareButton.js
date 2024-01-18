import React, { useState } from "react";
import "./RoomButtons.css";
import { LuScreenShare } from "react-icons/lu";
import { LuScreenShareOff } from "react-icons/lu";
// import ShareScreen from "../../../assets/icons/share-screen.png";
// import StopShare from "../../../assets/icons/stop-sharing.png";

const ScreenShareButton = () => {
  const [screenShareEnabled, setScreenShareEnabled] = useState(true);
  const handleToggleScreenShare = () => {
    setScreenShareEnabled(!screenShareEnabled);
  };

  return (
    <div className="cam_btn">
      <button onClick={handleToggleScreenShare}>
        {screenShareEnabled ? (
          // <img src={ShareScreen} alt="Share" />
          <LuScreenShare />
        ) : (
          // <img src={StopShare} alt="Stop" />
          <LuScreenShareOff />
        )}
      </button>
    </div>
  );
};

export default ScreenShareButton;
