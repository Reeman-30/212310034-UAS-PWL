import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useChat from "../../zustand/useChat";

export default function MessageContainer() {
  const { selectedChat, setSelectedChat } = useChat();

  useEffect(() => {
    return () => setSelectedChat(null);
  }, [setSelectedChat]);

  return (
    <div className="flex flex-col w-4/5 divider-horizontal">
      {selectedChat ? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 rounded-lg">
            <span className="label-text text-black font-bold">To: </span>{" "}
            <span className="font-semibold">{selectedChat.name}</span>
          </div>

          <Messages />

          <div className="p-4">
            <MessageInput />
          </div>
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center h-full">
        <div className="text-center text-xl font-bold">
          Select a chat to start messaging
        </div>
      </div>
    </div>
  );
};
