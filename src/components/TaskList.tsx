import type { Task } from "../types/Task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskList({ tasks, toggleTask, deleteTask }: Props) {
  return (
  <div>
    {tasks.length === 0 && (
      <p className="text-center text-gray-400">No tasks yet</p>
    )}

    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    ))}
  </div>
);
}

export default TaskList;