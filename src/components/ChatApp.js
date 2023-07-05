import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "../css/chatapp.css";
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      console.log(randomUser, "rondomUser");
      const newMessage = {
        user: randomUser,
        message: message,
        likes: 0,
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage("");
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...chatMessages];
    updatedMessages[index].likes += 1;
    setChatMessages(updatedMessages);
  };

  return (
    <div className="container">
      <h1>Chat App</h1>

      <div className="input-box">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div className="like-container">
        {chatMessages.map((chat, index) => (
          <div key={index} className="like-massage">
            <strong>{chat.user}: </strong> {chat.message}
            <button onClick={() => handleLike(index)}>
              <FaThumbsUp /> {chat.likes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatApp;
