import { useEffect, useState } from "react";
import useChat from "../zustand/useChat";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedChat } = useChat();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/messages/${selectedChat._id}`);
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedChat?._id) {
      getMessages();
    }
  }, [selectedChat?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
