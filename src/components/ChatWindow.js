import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import MemberList from './MemberList';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [chatName, setChatName] = useState("Example Chat");
  const [profile, setProfile] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const addMessage = (text) => {
    setMessages([...messages, { text, sender: currentUser }]);
  };

  // Callback function to handle member selection
  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    setChatName(member.name); // Set the chat name to the selected member's name
    setProfile(member.profilePhoto); // Set the profile photo to the selected member's name
    setCurrentUser(member); // Set the current user to the selected member
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar for members list */}
      <div style={{ flex: '0 0 25%', backgroundColor: 'teal' }}>
        <h2>Chats</h2>
        {/* Pass the callback function to the MemberList component */}
        <MemberList onSelectMember={handleMemberSelect} />
      </div>

      {/* Main chat area */}
      <div style={{ flex: '0 0 75%', border: '2px solid black', backgroundColor: 'teal', display: 'flex', flexDirection: 'column' }}>
        {/* Conditional rendering for chat header and placeholder message */}
        {selectedMember ? (
          <div style={{backgroundImage: 'linear-gradient(to right,aqua , #019CAD)', display: 'flex', alignItems: 'start' }}>
            {/* Pass the selected member to the ChatHeader component */}
            <ChatHeader profile={profile} chatName={chatName} selectedMember={selectedMember} />
          </div>
          
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Your chat will display here</h2>
            <p>Select a member to start chatting</p>
          </div>
        )}

        {/* Message List */}
        <div style={{ flex: '1' }}>
          <MessageList messages={messages} currentUser={currentUser} />
        </div>

        {/* Message Input */}
        { selectedMember ?(
        <div style={{ marginTop: 'auto',display:'flex',flexDirection:'row',justifyContent:'center' }}>
          <MessageInput addMessage={addMessage} />
        </div>
        ):(
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;