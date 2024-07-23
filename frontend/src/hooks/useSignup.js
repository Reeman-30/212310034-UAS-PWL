import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({ name, email, password, confirmPassword }) => {
    const success = handleErrors({ name, email, password, confirmPassword });

    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // LocalStorage
      localStorage.setItem("userAuth", JSON.stringify(data));

      // UseContext
      setAuthUser(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
}

const handleErrors = ({ name, email, password, confirmPassword }) => {
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all required fields");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  if (password.length < 8) {
    alert("Password should be at least 8 characters long");
    return false;
  }

  return true;
};
