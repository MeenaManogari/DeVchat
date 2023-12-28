import React from "react";
import { connect } from "react-redux";
import "./Messenger.css";
import MessengerContent from "./MessengerContent";
import WelcomeMessage from "./WelcomeMessage";

const Messenger = ({ chosenChatDetails }) => {
  return (
    <div className="messenger_main">
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </div>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messenger);
