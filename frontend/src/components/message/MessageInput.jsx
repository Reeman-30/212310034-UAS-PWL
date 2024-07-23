import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import useSendMessage from "../../hooks/useSendMessage";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="flex flex-row">
      <input
        type="text"
        placeholder="Message..."
        className="input input-bordered w-full"
        autoComplete="off"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="mx-3 btn btn-success">
        <FaPaperPlane />
      </button>
    </form>
  );
}
