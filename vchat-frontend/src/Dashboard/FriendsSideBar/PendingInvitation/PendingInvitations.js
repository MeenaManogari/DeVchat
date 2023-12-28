import React from "react";
import PendingInviteListItem from "./PendingInviteListItem";
import { connect } from "react-redux";
import "./pendingInvitation.css";

const PendingInvitations = ({ pendingFriendsInvitations }) => {
  return (
    <div className="invite_main">
      {pendingFriendsInvitations.map((invitation) => (
        <>
          <PendingInviteListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        </>
      ))}
    </div>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(PendingInvitations);
