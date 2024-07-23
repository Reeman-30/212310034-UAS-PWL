import React from "react";
import useChat from "../../zustand/useChat";

export default function Chat({ chat }) {
  const { selectedChat, setSelectedChat } = useChat();
  const isSelectedChat = selectedChat?._id === chat._id;

  return (
    <div
      className={`flex items-center hover:bg-cyan-600 rounded p-2 cursor-pointer ${
        isSelectedChat ? "bg-cyan-600" : ""
      }`}
      onClick={() => setSelectedChat(chat)}
    >
      <div className="avatar placeholder">
        <div className="bg-slate-400 text-neutral-content w-12 rounded-full">
          <span className="text-2xl text-base-100">
            {chat.name
              .split(" ")
              .map((str) => str[0])
              .join("")}
          </span>
        </div>
      </div>

      <div className="flex items-center p-3">
        <p className="font-bold">{chat.name}</p>
      </div>
    </div>
  );
}
