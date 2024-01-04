import React, { useEffect } from "react";
import { getDirectChatHistory } from "../../RealTimeCommunication/socketConnection";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
    console.log(chosenChatDetails);
  }, [chosenChatDetails]);

  return (
    <div className="msgcontent_main">
      <Messages />
      <NewMessageInput />
    </div>
  );
};

export default MessengerContent;
