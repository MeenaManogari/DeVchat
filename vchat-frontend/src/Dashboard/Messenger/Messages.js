import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import DUMMY_MESSAGES from "./DUMMY_MESSAGES";
import Message from "./Message";
import MessagesHeader from "./MessagesHeader";

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <div className="msgs_main">
      <MessagesHeader name={chosenChatDetails?.name} />
      {DUMMY_MESSAGES.map((message, index) => {
        return (
          <Message
            key={message._id}
            content={message.content}
            username={message.author.username}
            sameAuthor={message.sameAuthor}
            date={message.date}
            day={message.day}
          />
        );
      })}
    </div>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
