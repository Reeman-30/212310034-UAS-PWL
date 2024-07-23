import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useChat from "../../zustand/useChat";
import { extractTime } from "../../utils/extractTime";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedChat } = useChat();
  const fromMe = message.sender_id === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const chatBubbleColor = fromMe ? "bg-blue-500" : "";

  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble text-white ${chatBubbleColor} `}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50">{formattedTime}</div>
    </div>
  );
}
