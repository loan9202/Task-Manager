"use client";

import React from "react";
import TaskListWrapper from "./styled";
import { useTask } from "../lib/TaskProvider";
import { TaskItem } from "../TaskItem";

export function TaskList() {
  const { tasks } = useTask();

  return (
    <TaskListWrapper className='flex justify-center'>
      <ul role="list" className="divide-y divide-gray-100 container">
        {tasks.map((item) => (
         <TaskItem key={item.id} item={item} />
        ))}
      </ul>
    </TaskListWrapper>
  );
}
