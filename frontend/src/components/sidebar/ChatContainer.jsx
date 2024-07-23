import React from "react";
import Chat from "./Chat";
import useGetChats from "../../hooks/useGetChats";

export default function ChatContainer() {
  const { loading, chats } = useGetChats();

  return (
    <div className="h-96 flex flex-col overflow-auto">
      {chats.map((chat) => (
        <Chat key={chat._id} chat={chat} />
      ))}
    </div>
  );
}
