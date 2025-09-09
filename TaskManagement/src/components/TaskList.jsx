import React from 'react'

const TaskList = (props) => {
  const { tasks, toggleTask, deleteTask } = props;

  return (
    <div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            
            {/* Task Text - Click to toggle completion */}
            <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span>

            {/* Delete Button */}
            <button 
              className="delete-btn" 
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
