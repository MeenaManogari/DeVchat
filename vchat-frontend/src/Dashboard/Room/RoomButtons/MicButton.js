import React, { useState } from "react";
import "./RoomButtons.css";
import { FiMic } from "react-icons/fi";
import { FiMicOff } from "react-icons/fi";

// import MicOn from "../../../assets/icons/mic-on.png";
// import MicOff from "../../../assets/icons/mic-off.png";

const MicButton = ({ localStream }) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleTogglemic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  };

  return (
    <div className="cam_btn">
      <button onClick={handleTogglemic}>
        {micEnabled ? (
          // <img src={MicOn} alt="MicOn" />
          <FiMic />
        ) : (
          // <img src={MicOff} alt="MicOff" />
          <FiMicOff />
        )}
      </button>
    </div>
  );
};

export default MicButton;
