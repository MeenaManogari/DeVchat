import React from "react";
import Avatar from "../FriendsSideBar/FriendsList/Avatar";

const Message = ({ content, sameAuthor, username, date, day }) => {
  if (sameAuthor && day) {
    return (
      <div className="sameAuthorMsg">
        <p>{content}</p>
      </div>
    );
  }
  return (
    <div className="msgchat_main">
      <div className="avatar_container">
        <Avatar username={username} />
      </div>
      <div className="message_container">
        <h4>
          {username}
          {""}
          <span>{date}</span>
        </h4>
        <p>{content}</p>
      </div>
      <div className="msg_content"></div>
    </div>
  );
};

export default Message;
