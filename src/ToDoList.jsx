import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTask] = useState(['Goodmorning']);
    const [newTask, setNewTask] = useState("");


    function inputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if (newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTask(updatedTask);

    }
    function upTask(index){
        if (index > 0) {
            const updatedTask = [...tasks];
            const temp = updatedTask[index];
            updatedTask[index] = updatedTask[index - 1]
            updatedTask[index - 1] = temp
            setTask(updatedTask);
        }
    }
    function downTask(index){
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            const temp = updatedTask[index];
            updatedTask[index] = updatedTask[index + 1]
            updatedTask[index + 1] = temp;
            setTask(updatedTask);
        }
    }
    return(
        <div className="to-do-list">
            <h1 className="heading">TO-DO-LIST</h1>
            <input className="input-box" type="text" value={newTask} onChange={inputChange} placeholder="Enter a Task....." />
            <button className="button-add" onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="button-delete" onClick={() => deleteTask(index)}>🗑️</button>
                    <button className="button-up" onClick={() => upTask(index)}>⬆️</button>
                    <button className="button-down" onClick={() => downTask(index)}>⬇️</button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;