import React, { useState } from 'react';
import '../styles/taskitem.css';

const TaskItem = ({ task, onUpdateStatus, onDelete }) => {
    const [status, setStatus] = useState(task.status);

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);
        onUpdateStatus(task.id, newStatus);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            onDelete(task.id);
        }
    };

    return (
        <div className="task-item">
            <h2 className="task-title">{task.title}</h2>
            <p className="task-description">{task.description}</p>
            <div className="task-actions">
                <select
                    className="task-status"
                    value={status}
                    onChange={handleStatusChange}
                >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button className="delete-btn" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
