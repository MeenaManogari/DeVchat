import React, { useState } from "react";
import ResizeRoomButton from "./ResizeRoomButton";
import "./Room.css";
import RoomButtons from "./RoomButtons";
import VideosContainer from "./VideosContainer";

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <div className="room_main">
      <div
        className={`room_container ${
          isRoomMinimized ? "minimized_room_style" : "fullscreen_room_style"
        }`}
      >
        <VideosContainer />
        <RoomButtons />
        <ResizeRoomButton
          isRoomMinimized={isRoomMinimized}
          handleRoomResize={roomResizeHandler}
        />
      </div>
    </div>
  );
};

export default Room;
