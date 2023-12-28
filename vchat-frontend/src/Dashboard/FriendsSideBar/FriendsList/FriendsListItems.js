import React from "react";
import { chatTypes, getActions } from "../../../store/actions/chatActions";
import Avatar from "./Avatar";
import "./FriendsList.css";
import OnlineIndicator from "./OnlineIndicator";
import { connect } from "react-redux";

const FriendsListItems = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT);
  };

  return (
    <>
      <div className="friendslist_main">
        <button id="chat_list" onClick={handleChooseActiveConversation}>
          <Avatar username={username} />
          <h4>{username}</h4>
        </button>

        {isOnline && <OnlineIndicator />}
      </div>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(FriendsListItems);
