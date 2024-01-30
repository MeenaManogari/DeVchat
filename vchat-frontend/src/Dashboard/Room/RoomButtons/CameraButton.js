import React, { useState } from "react";
import "./RoomButtons.css";
import { MdOutlineVideocam } from "react-icons/md";
import { MdOutlineVideocamOff } from "react-icons/md";
// import VideoOn from "../../../assets/icons/video-on.png";
// import VideoOff from "../../../assets/icons/video-off.png";

const CameraButton = ({localStream}) => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  return (
    <div className="cam_btn">
      <button onClick={handleToggleCamera}>
        {cameraEnabled ? (
          // <img src={VideoOn} alt="CamOn" />
          <MdOutlineVideocam />
        ) : (
          // <img src={VideoOff} alt="CamOff" />
          <MdOutlineVideocamOff />
        )}
      </button>
    </div>
  );
};

export default CameraButton;
