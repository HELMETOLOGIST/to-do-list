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
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  function inputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") {
      toast.error("Please enter a valid task!");
      return;
    }

    if (tasks.some((task) => task.text === newTask)) {
      toast.error("Task already exists!");
      return;
    }

    toast.success("Task added successfully!");
    setTasks((t) => [{ text: newTask, completed: false }, ...t]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.info("Task deleted successfully!");
  }

  function upTask(index) {
    if (index > 0 && !edit) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }

  function downTask(index) {
    if (index < tasks.length - 1 && !edit) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }

  function editTask(index) {
    setEditedTask({ index, text: tasks[index].text });
    setEdit(true);
  }

  function saveEditedTask() {
    if (editedTask.text.trim() === "") {
      toast.error("Please enter a valid task!");
      return;
    }

    if (
      tasks.some(
        (task, i) => task.text === editedTask.text && i !== editedTask.index
      )
    ) {
      toast.error("Task already exists!");
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editedTask.index].text = editedTask.text;
    setTasks(updatedTasks);
    setEditedTask({ index: null, text: "" });
    setEdit(false);
    toast.success("Task edited successfully!");
  }

  function toggleCompleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    toast.info(
      updatedTasks[index].completed
        ? "Task marked as complete!"
        : "Task marked as incomplete!"
    );
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
            <li key={index} className={task.completed ? "completed-task" : ""}>
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
                  <span
                    className="custom-checkbox"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      width: "15px",
                      height: "15px",
                      borderRadius: "40%",
                      border: "1px solid #ccc",
                      marginRight: "5px",
                    }}
                    onClick={() => toggleCompleteTask(index)}
                  >
                    {task.completed && (
                      <span
                        className="checkmark"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "8px",
                          height: "8px",
                          backgroundColor: "transparent",
                          borderRadius: "40%",
                          border: "2px solid #000",
                        }}
                      ></span>
                    )}
                  </span>
                  <span className="text">{task.text}</span>
                  <button
                    className="button-delete"
                    onClick={() => deleteTask(index)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="button-edit"
                    onClick={() => editTask(index)}
                  >
                    <FaEdit />
                  </button>
                  <button className="button-up" onClick={() => upTask(index)}>
                    {index === 0 ? null : <FaArrowUp />}
                  </button>
                  <button
                    className="button-down"
                    onClick={() => downTask(index)}
                  >
                    {index === tasks.length - 1 ? null : <FaArrowDown />}
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
