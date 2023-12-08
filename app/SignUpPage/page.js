"use client"
import React from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import { addUser } from "../_services/logInServices";
import AlertDialog from "./AlertDialog";
import Link from "next/link";

export default function SignUpPage() {
  const { user, gitHubSignIn, gitHubSignOut } = useUserAuth();
  const [fullName, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);

  async function handleSignIn() {
    try {
      await gitHubSignIn();
      console.log(user);
    } catch (error) { 
      console.log(error);
    }
  }

  const handleSetFullName = (event) => {
    setName(event.target.value);
  };
  const handleSetUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const newItem = {
    "fullName": fullName,
    "userName": userName,
    "password": password
  };

  const handleSignUp=()=>{
    if (user) {
      addUser(newItem,user.uid)
      console.log("addUser",user.uid);
      setDialogOpen(true)
    }
    else{      console.log("fail");}
  }
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Link href="./LoginPage">
      <button
        className="absolute left-4 top-4 bg-[#DC8686] text-white p-2 rounded-md hover:bg-[#bf7676]"
      >
        ← Back To Main Page
      </button>
      </Link>
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create New Account
        </h2>
        <form  onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label
              htmlFor="full-name"
              className="text-sm font-bold text-gray-600 block"
            >
              Your Full Name
            </label>
            <input
              value={fullName}
              onChange={handleSetFullName}
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
              value={userName}
              onChange={handleSetUsername}
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
              value={password}
              onChange={handleSetPassword}
              id="password"
              type="password"  
               placeholder="Enter Your Password Here"
              className="w-full p-2 border border-[#DC8686] rounded-md text-gray-600"
            />
          </div>
      
          
        </form>
        <button
            onClick={handleSignUp}
            className="mt-2  w-full py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676]"
          >
            Sign Up
          </button>
       
      </div>
      <AlertDialog isOpen={isDialogOpen} onClose={handleCloseDialog} content={"Congratulation! You signed up successfully!"}/>

    </div>
  );
}
