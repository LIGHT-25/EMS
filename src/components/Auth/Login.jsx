import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg p-10 rounded-3xl w-full max-w-md">
        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <h2 className="text-white text-3xl font-semibold text-center">Welcome Back</h2>

          <input
            required
            className="w-full px-5 py-3 text-lg text-white bg-white/20 border border-white/30 rounded-xl placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
            type="email"
            placeholder="youremail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            className="w-full px-5 py-3 text-lg text-white bg-white/20 border border-white/30 rounded-xl placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-600 font-semibold text-lg rounded-xl hover:bg-gray-100 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
