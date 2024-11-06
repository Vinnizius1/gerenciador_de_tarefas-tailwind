import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;