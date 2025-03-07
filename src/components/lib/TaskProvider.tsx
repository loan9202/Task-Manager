'use client'

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import uuid from "uuid-v4";

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  markTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  markTask: () => {},
  removeTask: () => {},
});

interface TaskProviderProps {
  children: React.ReactNode;
}

export interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export function TaskProvider({children}: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = ( title: string) => { 
    const newTask = { id: uuid(), userId: 1, title, completed: false };
    setTasks((prev: Task[]) => [...prev, newTask]);
  }

  const markTask = (id: number) => {
    setTasks((prev) => prev.map((item) => (item.id === id ? {...item, completed: !item.completed} : item)));
  }

  const removeTask = (id: number) => {
    setTasks((prev: Task[]) => prev.filter((item: Task) => item.id !== id));
  }


  useEffect(() => {
    const fetchData = async () => {
        const reference = localStorage.getItem('TASK_LIST');

        if (reference) {
            setTasks(() => JSON.parse(reference));
        } else {
            const result = await axios("https://jsonplaceholder.typicode.com/todos?_limit=5");
            setTasks(result.data);
            localStorage.setItem('TASK_LIST', JSON.stringify(result.data));
        }
    };
    fetchData();
  }, []);

    // Update local storage whenever tasks change
    useEffect(() => {
      localStorage.setItem('TASK_LIST', JSON.stringify(tasks));
    }, [tasks]);

  return <TaskContext.Provider value={{tasks, addTask, markTask, removeTask }}>{children}</TaskContext.Provider>;
}

export const useTask = () => React.useContext(TaskContext);
