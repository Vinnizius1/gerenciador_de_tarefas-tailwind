function Tasks({ tasks }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map(task => (
        <li className="bg-slate-400 text-white p-2 rounded-md" key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
