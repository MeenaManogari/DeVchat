import React from "react";
import smallscreen from "../../assets/icons/resize-in.svg";
import fullscreen from "../../assets/icons/resize-out.svg";

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <div className="resize_btn">
      <button onClick={handleRoomResize}>
        {isRoomMinimized ? (
          <>
            {" "}
            <img src={fullscreen} alt="fullscreen" />
          </>
        ) : (
          <>
            <img src={smallscreen} alt="smallscreen" />
          </>
        )}
      </button>
    </div>
  );
};

export default ResizeRoomButton;
