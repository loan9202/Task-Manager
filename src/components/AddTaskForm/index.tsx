"use client";

import React, { useState } from "react";
import AddTaskWrapper from "./styled";
import { useTask } from "../lib/TaskProvider";

export function AddTask() {
  const [task, setTask] = useState("");
  const { addTask } = useTask();

  return (
    <AddTaskWrapper>
      <form
        className="flex items-center max-w-sm mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          addTask(task);
          setTask("");
        }}
      >
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add a new task"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span className="sr-only">Add</span>
        </button>
      </form>
    </AddTaskWrapper>
  );
}
