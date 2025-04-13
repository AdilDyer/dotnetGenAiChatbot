"use client";
import React, { useState } from "react";
import axios from "axios";
import { marked } from "marked";

const App = () => {
  const InputField = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
      setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (message.trim()) {
        onSendMessage(message);
        setMessage("");
      }
    };

    return (
      <form className="input-field" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
          className="input-message"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    );
  };
  const Message = ({ text, sender }) => {
    const formattedText = sender === "ai" ? marked.parse(text) : text;

    return (
      <div className={`message ${sender}`}>
        {sender === "user" ? (
          <p>{text}</p>
        ) : (
          <div
            className="ai-response"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        )}
      </div>
    );
  };
  // const Message = ({ text, sender }) => {
  //   return (
  //     <div className={`message ${sender}`}>
  //       <p>{text}</p>
  //     </div>
  //   );
  // };

  const ChatBox = ({ messages }) => {
    return (
      <div className="chat-box">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
    );
  };
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    // Adding user's message to the chat
    setMessages([...messages, { text: message, sender: "user" }]);

    setLoading(true);

    try {
      // Sending the message to the backend API
      const response = await axios.post("http://localhost:5219/GeminiAi/chat", {
        prompt: message,
      });

      // Adding AI's response to the chat
      setMessages([
        ...messages,
        { text: message, sender: "user" },
        { text: response.data.reply, sender: "ai" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="header">
        Asp.Net Core Controller Based Gen-AI ChatBot
        <br />
        <span>
          .Net TA2 By Adil Dyer Enroll No. 04, Btech Sem 4 CSE, 2023-2028.
        </span>
      </h1>
      <ChatBox messages={messages} />
      <InputField onSendMessage={sendMessage} />
      {loading && <div className="loading">AI is thinking...</div>}
    </div>
  );
};

export default App;
