import React from "react";
import { connect } from "react-redux";

const ChosenOptionLabel = ({ name }) => {
  return (
    <div>
      <h2>{`${name ? name : ""}`}</h2>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapStoreStateToProps)(ChosenOptionLabel);
