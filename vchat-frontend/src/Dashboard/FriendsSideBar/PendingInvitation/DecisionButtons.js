import React from "react";
import "./pendingInvitation.css";
import check from "../../../assets/icons/check-icon.png";
import cancel from "../../../assets/icons/cancel-icon.png";
const DecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <div className="decision_buttons">
      <button>
        <img
          src={check}
          alt="accept"
          disabled={disabled}
          onClick={acceptInvitationHandler}
        />
      </button>
      <button>
        <img
          src={cancel}
          alt="reject"
          disabled={disabled}
          onClick={rejectInvitationHandler}
        />
      </button>
    </div>
  );
};

export default DecisionButtons;
