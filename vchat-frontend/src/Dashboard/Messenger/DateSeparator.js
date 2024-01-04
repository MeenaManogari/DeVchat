import React from "react";
import "./Messenger.css";

const DateSeparator = ({ date }) => {
  return (
    <div className="Dates">
      <div className="separator"></div>
      <h5>{date}</h5>
      <div className="separator"></div>{" "}
    </div>
  );
};

export default DateSeparator;
