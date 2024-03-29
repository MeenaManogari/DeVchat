import React from "react";
import GroupIcon from "../../assets/icons/group-icon.png";

import { connect } from "react-redux";
import "./SideBar.css";
import ActiveRoomButton from "./ActiveRoomButton";
import CreateRoom from "./CreateRoom";

const SideBar = ({ activeRooms, isUserInRoom }) => {
  // const createNewRoomHandler = () => {
  //   //creating a room and sending info to the server about this
  //   roomHandler.createNewRoom();
  // };

  return (
    <div className="sidebar_main">
      <button>
        <img src={GroupIcon} alt="Friend group" />
      </button>
      <CreateRoom isUserInRoom={isUserInRoom} />
      {/* <button onClick={createNewRoomHandler}>+</button> */}
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(SideBar);
