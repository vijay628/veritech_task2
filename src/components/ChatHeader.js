// ChatHeader.js
import React from 'react';

const ChatHeader = ({ profile,chatName }) => {
  return (
    <div>
      <h1><img src={profile} alt='profile'/> {chatName}</h1>
    </div>
  );
};

export default ChatHeader;
