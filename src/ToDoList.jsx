import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaEdit, FaArrowUp, FaArrowDown } from "react-icons/fa";

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
  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  function inputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      toast.success("Task added successfully!");
      setTasks((t) => [...t, { text: newTask }]);
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

  function editTask(index) {
    setEditedTask({ index, text: tasks[index].text });
  }

  function saveEditedTask() {
    if (editedTask.text.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editedTask.index].text = editedTask.text;
      setTasks(updatedTasks);
      setEditedTask({ index: null, text: "" });
      toast.success("Task edited successfully!");
    } else {
      toast.error("Please enter a valid task!");
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
            <li key={index}>
              {editedTask.index === index ? (
                <>
                  <input
                    className="edit-input-box"
                    type="text"
                    value={editedTask.text}
                    onChange={(e) =>
                      setEditedTask({ ...editedTask, text: e.target.value })
                    }
                  />
                  <button className="button-save" onClick={saveEditedTask}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="text">{task.text}</span>
                  <button
                    className="button-delete"
                    onClick={() => deleteTask(index)}
                    style={{
                      opacity: 0.7,
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                    }} // Adjust opacity and shadow here
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="button-edit"
                    onClick={() => editTask(index)}
                    style={{
                      opacity: 0.7,
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                    }} // Adjust opacity and shadow here
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="button-up"
                    onClick={() => upTask(index)}
                    style={{
                      opacity: 0.7,
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                    }} // Adjust opacity and shadow here
                  >
                    <FaArrowUp />
                  </button>
                  <button
                    className="button-down"
                    onClick={() => downTask(index)}
                    style={{
                      opacity: 0.7,
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
                    }} // Adjust opacity and shadow here
                  >
                    <FaArrowDown />
                  </button>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
