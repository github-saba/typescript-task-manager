import { useState } from "react";

interface Props {
  addTask: (title: string) => void;
}

function TaskInput({ addTask }: Props) {

  // Local state for input field
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return; // prevent empty tasks

    addTask(title);   // call parent function
    setTitle("");     // clear input
  };

  return (
  <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Enter task..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      onClick={handleSubmit}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Add
    </button>
  </div>
);
}

export default TaskInput;