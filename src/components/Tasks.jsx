import { ChevronRightIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map(task => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
              task.isCompleted ? "line-through" : ""
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
