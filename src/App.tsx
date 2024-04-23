import { useState } from 'react'
import './App.css'
import InputField from './components/InputField/InputField'
import TodoList from './components/TodoList/TodoList';
import { Todo } from './types';

function App() {
  const [task, setTask] = useState<string>("");
  const [allTasks, setAllTasks] = useState<Todo[]>([]);

  // Function for handling addition of new task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the task is empty
    if(!task) {
      alert("Task can not be empty!");
      return;
    }
    
    setAllTasks([...allTasks, {
      id: Date.now(),
      task,
      isCompleted: false
    }]);
  }

  return (
    <>
      <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TodoList allTasks={allTasks} setAllTasks={setAllTasks} />
    </>
  )
}

export default App
