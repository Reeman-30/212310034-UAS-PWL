import { useEffect, useState } from "react";

const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);

      try {
        const response = await fetch("/api/users");
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setChats(data.data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, []);

  return { loading, chats };
};

export default useGetChats;
