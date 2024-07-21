import React from "react";
import TaskItem from "./TaskItem";
import config from "../config/config";
import { toast } from "react-toastify";

const TaskList = ({ tasks, fetchTasks }) => {
  const handleUpdateStatus = async (taskId, newStatus) => {
    try {
      await fetch(`${config.apiBaseUrl}/api/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchTasks();
      toast.success("Task status updated successfully!");
    } catch (error) {
      console.error("Error updating task status:", error);
      toast.error("Error in updating tasks");
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await fetch(`${config.apiBaseUrl}/api/tasks/${taskId}`, {
        method: "DELETE",
      });
      fetchTasks();
      toast.success("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Error in deleting tasks");
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateStatus={handleUpdateStatus}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
