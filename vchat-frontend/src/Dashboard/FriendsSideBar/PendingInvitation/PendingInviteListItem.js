import React, { useState } from "react";
import "./pendingInvitation.css";
import Avatar from "../FriendsList/Avatar";
import DecisionButtons from "./DecisionButtons";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const PendingInviteListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    console.log(id);
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitation = () => {
    console.log(id);
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };

  return (
    <div className="pending_invite_list" title={mail}>
      <Avatar username={username} />
      <h4>{username}</h4>
      <DecisionButtons
        disabled={buttonDisabled}
        acceptInvitationHandler={handleAcceptInvitation}
        rejectInvitationHandler={handleRejectInvitation}
      />
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(PendingInviteListItem);
