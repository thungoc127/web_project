import React from "react";

export default function LoginPage() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ background: "linear-gradient(45deg, #00FF00, #FF00FF)" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#DC8686" }}
        >
          Welcome Back !
        </h1>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold"
              style={{ color: "#DC8686" }}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold"
              style={{ color: "#DC8686" }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
