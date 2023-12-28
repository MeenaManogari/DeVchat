import React, { useState } from "react";
import AddFriendDialog from "./AddFriendDialog";
import "./Friends.css";
import FriendsList from "./FriendsList/FriendsList";
import FriendsTitle from "./FriendsTitle";
import PendingInvitations from "./PendingInvitation/PendingInvitations";

const FriendsSideBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  // const handleCloseFriendDialog = () => {
  //   setIsDialogOpen(false);
  // };
  return (
    <>
      <div className="friends_main">
        <button onClick={handleAddFriendDialog}>Add Friend</button>
        <FriendsTitle title="Private Messages" />
        <FriendsList />
        <FriendsTitle title={"Pending Invitation"} />
        <PendingInvitations />
      </div>
      <AddFriendDialog trigger={isDialogOpen} setTrigger={setIsDialogOpen} />
    </>
  );
};

export default FriendsSideBar;
