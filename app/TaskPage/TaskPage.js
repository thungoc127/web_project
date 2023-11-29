import React from 'react';

export default function TaskPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F4CCCC' }}>
      <header className="text-center p-6">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <h2 className="text-2xl">Tom Matt’s List</h2>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for Task List */}
        <aside className="w-1/4 bg-[#DC8686] p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Your Task List</h3>
            <button className="text-white text-2xl">+</button>
          </div>
          {/* Task Items */}
          <ul>
            <li className="mb-2">
              <button className="w-full text-left p-2 bg-white rounded-md">Semester 3</button>
            </li>
            <li>
              <button className="w-full text-left p-2 bg-white rounded-md">Homework</button>
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="w-3/4 p-4">
          {/* List Container */}
          <section className="mb-4">
            <div className="mb-4">
              <h4 className="text-xl font-bold mb-2">Web Development 2</h4>
              <div className="flex items-center mb-4">
                <span className="text-sm mr-2">Assignment 2</span>
                <span className="text-xs">Nov 23 - Nov 30</span>
                <div className="flex-grow text-right">
                  <button className="text-xs mr-2">✏️</button>
                  <button className="text-xs">🗑️</button>
                </div>
              </div>
              {/* Task Cards */}
              <div className="bg-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-bold">TODO TITLE</h5>
                  <div>
                    <button className="text-xs mr-2">✏️</button>
                    <button className="text-xs">🗑️</button>
                  </div>
                </div>
                <p className="text-sm mb-2">TODO SUB TITLE</p>
                {/* Repeat for each task */}
              </div>
              {/* Add Card Button */}
              <button className="w-full mt-4 p-2 bg-white rounded-md text-left">+ Add Another Card</button>
            </div>
          </section>

          {/* Add List Input Area */}
          <div className="border-2 border-white p-2 rounded-md">
            <input
              className="w-full bg-[#DC8686] p-2 rounded-md text-white placeholder-white"
              placeholder="Add Another List......"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
