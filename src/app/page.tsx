import { AddTask } from "@/components/AddTaskForm";
import { TaskProvider } from "@/components/lib/TaskProvider";
import { TaskList } from "@/components/TaskList";

export default function Home() {
  return (
    <TaskProvider>
      <h3 className='text-center font-semibold text-gray-900 my-3'> Task Management </h3>
      <AddTask/>
      <TaskList/>
    </TaskProvider>
  );
}
