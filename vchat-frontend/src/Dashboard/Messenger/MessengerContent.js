import React, { useEffect } from "react";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    //TODO
    //fetching chat history from specific user id
  }, [chosenChatDetails]);

  return (
    <div className="msgcontent_main">
      <Messages />
      <NewMessageInput />
    </div>
  );
};

export default MessengerContent;
