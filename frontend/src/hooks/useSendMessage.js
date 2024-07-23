import { useState } from "react";
import useChat from "../zustand/useChat";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedChat } = useChat();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/messages/send/${selectedChat._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data.data]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
