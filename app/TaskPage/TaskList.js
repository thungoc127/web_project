"use client";
import React from "react";
import { useState } from "react";
import SubTask from "./SubTask";
import AlertDialog from "./AlertDialog"

function TaskList({title,description}) {
  const [subCards, setSubCards] = useState([{content:'Sub-task test'}]);

  const [value, setValue] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);

  const handleChange = (event) => {
    const val = event.target?.value;
    setValue(val);
  };
  const handAddSubTask = (event) => {
    if(value==""){
      setErrorDialogOpen(true);

    }
    else{
      setSubCards((subCards) => [...subCards, { content: value }]);
      setValue("");
      setDialogOpen(true);
    }

  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };
  return (
    <div className="bg-gray-100 text-gray-800 p-4 rounded-md shadow-md" style={{ maxWidth: '280px' }}>
      <h2 className="text-xl font-bold mb-2 ">{title}</h2>
      <p className=" text-sm italic mb-4">{description}</p>
      <div>
        {subCards.map((subTask) => (
          <SubTask content={subTask.content} />
        ))}
              <AlertDialog isOpen={isErrorDialogOpen} onClose={handleCloseErrorDialog} content={'Empty subtask, please try again!'} />

      </div>

      <textarea
        className="w-full h-50 p-4   mb-4 rounded-md text-gray-800 placeholder-gray-500 bg-white"
        id="review-text"
        onChange={handleChange}
        placeholder="Adding your sub-task"
        rows={1}
        value={value}
        style={{ color: "Gray" }}
      />

      <button
        onClick={handAddSubTask}
        className="mt-2 py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676]"
      >
        Add to the list
      </button>
    </div>
  );
}

export default TaskList;
