import React from "react";
import "./RoomButtons.css";
import { LuScreenShare } from "react-icons/lu";
import { LuScreenShareOff } from "react-icons/lu";
import * as webRTCHandler from "../../../RealTimeCommunication/webRTCHandler";
// import ShareScreen from "../../../assets/icons/share-screen.png";
// import StopShare from "../../../assets/icons/stop-sharing.png";

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive,
}) => {
  //const [isScreenSharingActive, setIsScreenSharingActive] = useState(true);
  const handleToggleScreenShare = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error occured when trying to get access to screen share stream"
        );
      }
      if (stream) {
        setScreenSharingStream(stream);
        webRTCHandler.switchOutgoingTracks(stream);
      }
    } else {
      webRTCHandler.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((t) => t.stop());
      setScreenSharingStream(null);
    }
  };

  return (
    <div className="cam_btn">
      <button onClick={handleToggleScreenShare}>
        {isScreenSharingActive ? (
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
