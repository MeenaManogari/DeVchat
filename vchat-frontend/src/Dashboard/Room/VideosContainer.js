import React from "react";
import { connect } from "react-redux";
import "./Room.css";
import Video from "./Video";

const VideosContainer = ({
  localStream,
  remoteStreams,
  screenSharingStream,
}) => {
  return (
    <div className="vc_main">
      <Video
        stream={screenSharingStream ? screenSharingStream : localStream}
        isLocalStream
      />
      {remoteStreams.map((stream) => (
        <Video stream={stream} key={stream.id} />
      ))}
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(VideosContainer);
