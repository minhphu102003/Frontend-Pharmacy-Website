// src/components/ChatIcon.jsx
import React from 'react';
import icons from '../../ultils/icons';

const { HiOutlineChatAlt } = icons;

const ChatIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-primaryColor text-white p-3 rounded-full shadow-lg cursor-pointer"
    >
      <HiOutlineChatAlt className="h-6 w-6" />
    </div>
  );
};

export default ChatIcon;