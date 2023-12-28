import React from "react";
import FriendsListItems from "./FriendsListItems";
import { connect } from "react-redux";

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  return friends.map((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    return {
      ...f,
      isOnline: isUserOnline ? true : false,
    };
  });
};

// const checkOnlineUsers = (friends = [], onlineUsers = []) => {
//   friends.forEach((f) => {
//     const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
//     f.isOnline = isUserOnline ? true : false;
//   });

//   return friends;
// };

const FriendsList = ({ friends, onlineUsers }) => {
  return (
    <div className="friends_list_item_main">
      {checkOnlineUsers(friends, onlineUsers).map((f) => (
        <FriendsListItems
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </div>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
