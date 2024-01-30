import React from "react";
import * as roomHandler from "../../RealTimeCommunication/roomHandler";
const CreateRoom = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    //creating a room and sending info to the server about this
    roomHandler.createNewRoom();
  };
  return (
    <div className="create_room_btn">
      <button disabled={isUserInRoom} onClick={createNewRoomHandler}>
        +
      </button>
    </div>
  );
};

export default CreateRoom;
