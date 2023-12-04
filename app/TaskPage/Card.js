"use client";
import React from "react";
import { useState } from "react";

const SubCard = ({ title, content }) => (
  <div className="bg-white p-4 rounded-md shadow-md mb-2">
    <p className="text-sm">{content}</p>
  </div>
);

const Card = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const val = event.target?.value;
    setValue(val);
  };
  return (
    <div className="bg-gray-100 text-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 ">Main Card Title</h2>

      <SubCard content="Content for Subcard 1" />
      <SubCard content="Content for Subcard 2" />
      <SubCard content="Content for Subcard 3" />
      <textarea
        className="w-full h-50 p-4   mb-4 rounded-md text-gray-800 placeholder-gray-500 bg-white"
        id="review-text"
        onChange={handleChange}
        placeholder="Adding your task"
        rows={1}
        value={value}
        style={{ color: "Gray" }}
      />

      <button
            className="mt-2  w-full py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676]"
            >
        Add to the list
      </button>
    </div>
  );
};

export default Card;
