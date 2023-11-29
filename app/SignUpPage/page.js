import React from "react";

export default function SignUp() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create New Account
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="full-name"
              className="text-sm font-bold text-gray-600 block"
            >
              Your Full Name
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Enter Your Name Here"
              className="w-full p-2 border border-[#DC8686] rounded-md text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="text-sm font-bold text-gray-600 block"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Your Email Here"
              className="w-full p-2 border border-[#DC8686] rounded-md text-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-bold text-gray-600 block"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password Here"
              className="w-full p-2 border border-[#DC8686] rounded-md text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
