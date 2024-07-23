import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="card bg-slate-700 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="text-center font-bold text-2xl">
          Login To <span className="text-blue-500">ChatApps</span>
        </h2>

        <form onSubmit={handleSubmit} method="POST">
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <span className="text-sm">
              Don't have any account?{" "}
              <Link to="/signup" className="text-cyan-500">
                Register Here!
              </Link>
            </span>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-success w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
