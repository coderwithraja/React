import React, { useState } from 'react'
import './TaskManager.css'
const TaskForm = ({addtask}) => {

    const [value,setValue] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        const trimmed = value.trim();
        if (trimmed) {
          console.log("Form submitted:", trimmed);
          addtask(value);
          setValue(""); 
        }
      };
      


  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add a Task" />
            <button type="submit" className='add-task-btn' >Add </button>
        </form>
    </div>
  )
}

export default TaskForm