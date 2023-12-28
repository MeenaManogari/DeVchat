import React from "react";

const Avatar = ({ username }) => {
  return (
    <div className="avatar_main">
      <div className="avatar_profile">
        <h4>{username.substring(0, 2)}</h4>
      </div>
    </div>
  );
};

export default Avatar;
