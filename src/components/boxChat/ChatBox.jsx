import React, { useState } from "react";
import icons from "../../ultils/icons";
import Message from "./Mesage";

const { HiOutlineX } = icons;

const ChatBox = ({ onClose, messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [storeMessages, setStoreMessages] = useState([
    {
      sender: "chatbox",
      text: "Welcome to our chat! Feel free to ask any questions.",
    },
    {
      sender: "chatbox",
      text: "Type your message in the input box below and hit 'Send'.",
    },
  ]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { sender: "user", text: inputValue };
      setStoreMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-10 right-10 h-3/4 w-full rounded-lg border-2 border-primaryColor bg-white p-4 shadow-lg md:w-3/4">
      <div className="relative h-full">
        <div className="mb-4 flex items-center justify-between border-b-2 border-primaryColor pb-2">
          <h2 className="text-lg font-bold">Chat with us</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <HiOutlineX className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-4 h-[calc(100%-70px)] overflow-y-auto">
          {storeMessages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 flex w-full items-center bg-white p-4">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 rounded-md border border-gray-300 p-2 focus:border-primaryColor focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 cursor-pointer rounded-md bg-primaryColor p-2 text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
