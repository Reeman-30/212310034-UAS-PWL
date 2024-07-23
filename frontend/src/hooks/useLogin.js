import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email, password) => {
    const success = handleErrors(email, password);

    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("userAuth", JSON.stringify(data));
      setAuthUser(data.data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

const handleErrors = (email, password) => {
  if (!email || !password) {
    alert("Please fill the email and password");
    return false;
  }

  return true;
};
