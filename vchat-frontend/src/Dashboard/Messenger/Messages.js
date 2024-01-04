import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import DateSeparator from "./DateSeparator";
//import DUMMY_MESSAGES from "./DUMMY_MESSAGES";
import Message from "./Message";
import MessagesHeader from "./MessagesHeader";

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };
  return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <div className="msgs_main">
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author._id === messages[index - 1].author._id;
        const day =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );

        console.log(message.date);
        console.log(
          convertDateToHumanReadable(new Date(message.date), "dd/m/yy")
        );

        return (
          <div key={message._id}>
            {(!day || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  "dd/mm/yy"
                )}
              />
            )}
            <Message
              content={message.content}
              username={message.author.username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "dd/mm/yy"
              )}
              day={day}
            />
          </div>
        );
      })}
    </div>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
