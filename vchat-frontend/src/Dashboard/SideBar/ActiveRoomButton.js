import React from "react";
import Avatar from "../FriendsSideBar/FriendsList/Avatar";
import * as roomHandler from "../../RealTimeCommunication/roomHandler";

const ActiveRoomButton = ({
  creatorUsername,
  roomId,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinActiveRoom = () => {
    if (amountOfParticipants < 4) {
      //join room
      roomHandler.joinRoom(roomId);
    }
  };

  const activeRoomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}.Connected: ${amountOfParticipants}`;

  return (
    <div title={roomTitle}>
      <button
        disabled={activeRoomButtonDisabled || isUserInRoom}
        onClick={handleJoinActiveRoom}
      >
        <Avatar username={creatorUsername} />
      </button>
    </div>
  );
};

export default ActiveRoomButton;
