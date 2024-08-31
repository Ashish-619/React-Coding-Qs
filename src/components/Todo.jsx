import React from 'react';
import { useState } from 'react';
import '../index.css'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingText] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    function addTask(event) {
        event.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false, edited: false }]);
            setNewTask('');
        }
    }

    function completeTask(index) {
        const completedTask = tasks.map((task, taskIndex) => {
            return taskIndex === index ? { ...task, completed: !task.completed } : task
        });
        setTasks(completedTask);
    }

    function editTask(index) {
        setEditingIndex(index);
        setEditingText(tasks[index].text);
    }

    function saveTask(index) {
        const updatedTask = tasks.map((task, taskIndex) => {
            return taskIndex === index ? { ...task, text: editingTask } : task
        });
        setTasks(updatedTask);
        setEditingIndex(null);
        setEditingText('');
    }

    function deleteTask(index) {
        const newTodo = tasks.filter((todo, todoIndex) => todoIndex !== index);
        setTasks(newTodo);
    }

    return (
        <>
            <main>
                <h1>Todo App</h1>
                <input type="text" className='
                task' placeholder='Add Task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button className='add-task' onClick={addTask}>Add Task</button>
                <div className='todo-list'>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {editingIndex === index ?
                                    <>
                                        <input type="text" value={editingTask} onChange={(e) => setEditingText(e.target.value)} />
                                        <button onClick={() => saveTask(index)}>Save</button>
                                    </>
                                    : (
                                        <>
                                            {task.text}
                                            <button className='complete-btn' onClick={() => completeTask(index)}>{task.completed ? 'Undo' : 'Complete'}</button>
                                            <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                                            <button className='edit-btn' onClick={() => editTask(index)}>Edit</button>
                                        </>
                                    )}
                            </li>
                        ))}
                    </ul>
                </div>
            </main >
        </>
    )
}

export default Todo;