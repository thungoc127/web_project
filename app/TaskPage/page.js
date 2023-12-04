"use client";
import React from "react";
import { useState } from "react";
import Card from "./Card"


function TaskPage()  {
  const [value, setValue] = useState("Description ............");


const handleChange = (event) => {
  const val = event.target?.value;
  setValue(val);
};
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="text-center p-4 bg-[#DC8686] text-white">
        <h1 className="text-4xl font-bold">Welcome to Simple Task</h1>
        <h2 className="text-2xl">Make your life easier</h2>
      </header>

      <div className="flex flex-1">
        {/* Display Task List on the Right */}
        <div className="w-1/4 p-4">
          <section className="mb-4">
            <div className="mb-4">
              <h4 className="text-xl font-bold mb-2 text-[#DC8686]">
                Adding your task
              </h4>

              <h3 className="text-gray-500">
                Task Label
              </h3>
              <input
  className="w-full h-50 p-4 mb-4 rounded-md text-gray-800 placeholder-gray-500 bg-white"
  placeholder="Task Label"
/>
      <textarea
        className="w-full h-50 p-4   mb-4 rounded-md text-gray-800 placeholder-gray-500 bg-white"
        id="review-text"
        onChange={handleChange}
        placeholder="Adding your note"
        rows={1}
         value={value}
        style={{ color: 'Gray' }}
      /> 

             
            </div>
          </section>

            <button
            className="mt-2  w-full py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676]"
            >
              Add your task
            </button>
        </div>

        {/* Add Task Section on the Left */}
        <aside className="w-3/4 p-4 bg-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Your Task List</h3>
          </div>
          <div className="flex space-x-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TaskPage;
