import React, { useState } from "react";
import { connect } from "react-redux";
import { sendDirectMessage } from "../../RealTimeCommunication/socketConnection";

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    console.log("Sending message to the server");

    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <div className="msginput_main">
      <input
        type="text"
        placeholder={`Type your message here to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </div>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(NewMessageInput);
