import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages, currentUser }) => {
  const messageListRef = useRef(null);

  // Scroll to the bottom of the message list when it updates
  useEffect(() => {
    const scrollToBottom = () => {
      if (messageListRef.current) {
        messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      }
    };

    scrollToBottom();

  }, [messages]);

  return (
    <div
      ref={messageListRef}
      style={{
        width: '100%',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: message.sender === currentUser ? 'flex-end' : 'flex-start',
            marginBottom: '2px',
          }}
        >
          <div
            style={{
              backgroundColor: message.sender === currentUser ? '#4CAF50' : '#2196F3',
              color: 'white',
              padding: '10px',
              borderRadius: message.sender === currentUser ? '10px 10px 0 10px' : '10px 10px 10px 0',
              maxWidth: '70%',
              wordWrap: 'break-word',
            }}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;