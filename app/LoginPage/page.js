import React from "react";
import Image from 'next/image';
import GoogleLogo from '../logo/GoogleLogo.png';
import GitHubLogo from '../logo/GitHubLogo.png';

export default function LoginPage() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="w-full max-w-sm">
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#4a5568" }}
        >
          SIMPLETASK
        </h1>
        <div className="space-y-6">
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
              className="w-full p-2 border border-[#DC8686] rounded-md text-gray-600"
              placeholder="Enter your username"
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
              className="w-full p-2 border border-[#DC8686] rounded-md text-gray-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676] transition duration-300"
          >
            Log In
          </button>
          <button
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">
              <Image src={GoogleLogo} alt="Google logo" width={30} height={30} />
            </span>
            Continue with Google
          </button>
          <button
            className="w-full py-2 px-4 bg-gray-600 text-white rounded-md font-bold hover:bg-gray-700 transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">
              <Image src={GitHubLogo} alt="GitHub Logo" width={30} height={30} />
            </span>
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
