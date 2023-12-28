import React from "react";
import Avatar from "../FriendsSideBar/FriendsList/Avatar";

const MessagesHeader = ({ name = "" }) => {
  return (
    <div className="msghead_main">
      <Avatar username={name} />
      <h4>{name}</h4>
      <h5>Chat with your friend {name}</h5>
    </div>
  );
};

export default MessagesHeader;
