import type { Task } from "../types/Task";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

function TaskItem({ task, toggleTask, deleteTask }: Props) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-2 shadow-sm">

      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
      {task.title}
    </span>

    <button
      onClick={() => deleteTask(task.id)}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>

  </div>
);
}

export default TaskItem;