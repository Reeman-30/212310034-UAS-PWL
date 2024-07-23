import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signUp } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };

  return (
    <div className="card bg-slate-700 w-auto shadow-xl">
      <div className="card-body">
        <h2 className="text-center font-bold text-2xl">Register</h2>

        <form onSubmit={handleSubmit} method="post">
          <div className="mt-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xl"
              id="name"
              autoComplete="off"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xl"
              id="email"
              autoComplete="off"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xl"
              id="password"
              autoComplete="off"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mt-2">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xl"
              id="confirmPass"
              autoComplete="off"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className="mt-2">
            <span className="text-sm">
              Already have account?{" "}
              <Link to="/login" className="text-cyan-500">
                Login Here!
              </Link>
            </span>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-success w-full">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
