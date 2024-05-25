import React from 'react';
import icons from '../../ultils/icons';

const { HiOutlineChatAlt, HiOutlineUser } = icons;

const Message = ({ message }) => {
  const isUserMessage = message.sender === 'user';

  return (
    <div className={`flex items-start mb-4 cursor-pointer  ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
      {!isUserMessage && <HiOutlineChatAlt className="h-6 w-6 mr-2" />}
      <div className={`p-2 rounded-lg ${isUserMessage ? 'bg-primaryColor text-white' : 'bg-gray-200 text-black'} max-w-xs`}>
        {message.text}
      </div>
      {isUserMessage && <HiOutlineUser className="h-6 w-6 ml-2" />}
    </div>
  );
};

export default Message;