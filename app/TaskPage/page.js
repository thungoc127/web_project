"use client";
import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import AlertDialog from "./AlertDialog";
import { addTask } from "../_services/taskService";
import { useUserAuth } from "../_utils/auth-context";
import { addUser } from "../_services/logInServices";
import Link from "next/link";


function TaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);
  const [taskLists, setTaskLists] = useState([]);
  const { user } = useUserAuth();

  const task = {
    "title": title,
    "description": description
  };

  const handleTitleChange = (event) => {
    const val = event.target?.value;
    setTitle(val);
  };
  const handleDescriptionChange = (event) => {
    const val = event.target?.value;
    setDescription(val);
  };


  
  const newItem = {
    "fullName": title,
    "userName": description,
    "password": description
  };
  const newTask = {
    "title": title,
    "description": description,
  };


  const handleAddNewTask = () => {
    if (title == "") {
      setErrorDialogOpen(true);
    } else {
      setTaskLists((taskLists) => [
        ...taskLists,
        { title: title, description: description },
      ]);

      setTitle("");
      setDescription("");
      setDialogOpen(true);

      if (user) {
        addUser(newItem,user.uid)
        addTask(newTask,user.uid)
        console.log("addTask", user.uid);
      } else {
        console.log("fail");
      }
    }
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AlertDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        content={"Task is added successfully!"}
      />
      <AlertDialog
        isOpen={isErrorDialogOpen}
        onClose={handleCloseErrorDialog}
        content={"Empty task title, please try again!"}
      />
      <Link href="./LoginPage">
      <button
        className="absolute left-4 top-4 bg-[#DC8686] text-white p-2 rounded-md hover:bg-[#bf7676]"
      >
        ← Back To Main Page
      </button>
      </Link>
      
      <header className="text-center p-4 bg-[#DC8686] text-white">
        <h1 className="text-4xl font-bold">Welcome to Simple Task</h1>
        <h2 className="text-2xl">Make your life easier</h2>
      </header>

      <div className="flex flex-1">
        <div className="w-1/4 p-4">
          <section className="mb-4">
            <div className="mb-4">
              <h4 className="text-xl font-bold mb-2 text-[#DC8686]">
                Adding your task
              </h4>
              <input
                value={title}
                onChange={handleTitleChange}
                className="w-full h-50 p-4 mb-4 rounded-md text-gray-800 placeholder-gray-500 bg-white"
                placeholder="Task Title"
              />
              <textarea
                className="w-full h-50 p-4   mb-4 rounded-md text-gray-800 placeholder-gray-500 bg-white"
                id="review-text"
                onChange={handleDescriptionChange}
                placeholder="Description ............"
                rows={2}
                value={description}
                style={{ color: "Gray" }}
              />
            </div>
          </section>

          <button
            onClick={handleAddNewTask}
            className="mt-2  w-full py-2 px-4 bg-[#DC8686] text-white rounded-md font-bold hover:bg-[#bf7676]"
          >
            Add your task
          </button>
        </div>

        {/* Add Task Section on the Left */}
        <aside className="w-3/4 p-4 bg-gray-200 ">
          <div className=" justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Your Task List</h3>
          </div>
          <div
            className="overflow-x-auto  "
            style={{ display: "flex", flexDirection: "row" }}
          >
            {taskLists.map((taskList) => (
              <div className=" p-2 flex-shrink-0">
                <TaskList
                  title={taskList.title}
                  description={taskList.description}
                />
              </div>
            ))}
            <div className=" p-2 flex-shrink-0">
              <TaskList title={"Task Title"} description={"Task description"} />
            </div>{" "}
            <div className=" p-2 flex-shrink-0">
              <TaskList title={"Task Title"} description={"Task description"} />
            </div>{" "}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TaskPage;
