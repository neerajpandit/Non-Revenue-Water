import React, { useState, useRef, useEffect } from 'react';
import '../css/ChatPage.css'; 
import send from '../Assets/send-icon.png';

const New = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const chatContainerRef = useRef(null);
  
    const handleSendMessage = () => {
      if (newMessage.trim() === '') return;
  
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSendMessage();
      }
    };
  
    useEffect(() => {
      // Scroll to the bottom of the chat container when a new message is added
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [messages]);

  const [showChatBox, setShowChatBox] = useState(true);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className={`chat-box ${showChatBox ? 'visible' : 'hidden'}`}>
      <div className="chat-toggle" onClick={toggleChatBox}>
        <div className="toggle-icon">×</div>
      </div>
      <div className="chat-header">
        <p>Chat With Me</p>
        <p>We're Online!</p>
        
      </div>
      <div className="chat-body">
        <div className="chat-messages" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'chatbot'}`}
          >
            {message.sender === 'chatbot' && <div className="chatbot-icon">🤖</div>}
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}> <img src={send} alt='send'></img></button>
        {/* </input> */}
      </div>
      </div>
    </div>
  );
};

export default New;

