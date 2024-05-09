import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToDoList() {
  // Function to fetch tasks from localStorage
  const getTasksFromStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  // Function to save tasks to localStorage
  const saveTasksToStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  function inputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      toast.success("Task added successfully!");
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    } else {
      toast.error("Please enter a valid task!");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.info("Task deleted successfully!");
  }

  function upTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  function downTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="background">
      <div className="to-do-list">
        <h1 className="heading">TO-DO-LIST</h1>
        <input
          className="input-box"
          type="text"
          value={newTask}
          onChange={inputChange}
          placeholder="Enter a Task....."
        />
        <button className="button-add" onClick={addTask}>
          Add
        </button>
        <ol className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <span className="text">{task.text}</span>
              <button
                className="button-delete"
                onClick={() => deleteTask(index)}
              >
                🗑️
              </button>
              <button className="button-up" onClick={() => upTask(index)}>
                ⬆️
              </button>
              <button className="button-down" onClick={() => downTask(index)}>
                ⬇️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
