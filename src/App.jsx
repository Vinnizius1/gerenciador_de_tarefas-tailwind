import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Tarefa 3",
      description: "Descrição da tarefa 3",
      isCompleted: false,
    },
  ]);

  //
  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // Preciso atualizar esta tarefa
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // Não preciso atualizar
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks onTaskClick={onTaskClick} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
