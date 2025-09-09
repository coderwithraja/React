import React, { useState } from 'react'
import TaskForm from './TaskForm';
import './TaskManager.css';
import TaskList from './TaskList';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addtask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle completed state
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    const fliterTasks = tasks.filter((task) => {
        return task.id !== id
    })
    setTasks(fliterTasks)  
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm addtask={addtask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default TaskManagement;
