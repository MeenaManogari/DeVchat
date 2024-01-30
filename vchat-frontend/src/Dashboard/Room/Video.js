import React, { useEffect, useRef } from "react";
import "./Room.css";

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;

    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <div className="video_main">
      <video
        id="videoE1"
        ref={videoRef}
        autoPlay
        muted={isLocalStream ? true : false}
      ></video>
    </div>
  );
};

export default Video;
