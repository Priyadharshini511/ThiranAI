import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const TaskCalendar = ({ onClose }) => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedTasks, setSelectedTasks] = useState([]);
  console.log("Using token for fetchTasks:", token);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(res.data.tasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

useEffect(() => {
  if (token) {
    fetchTasks();
  }
}, [token]); // 👈 wait for token to be set


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName) return;

    try {
      await axios.post(
        "http://localhost:8000/add-task",
        {
          task_name: taskName,
          deadline: date.toISOString().split("T")[0],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTaskName("");
      fetchTasks();
      alert("Task added");
    } catch (err) {
      alert("Failed to add task");
    }
  };

  const onDateChange = (value) => {
    setDate(value);
    const day = value.toISOString().split("T")[0];
    const filtered = tasks.filter((t) => t.deadline === day);
    setSelectedTasks(filtered);
  };

const tileClassName = ({ date }) => {
  const dateStr = date.toISOString().split("T")[0];
  if (tasks.some((task) => task.deadline === dateStr)) {
    return "has-task";  // ✅ Replace Tailwind with a custom class
  }
  return null;
};


  return (
    <div className="fixed top-24 right-20 bg-white shadow-2xl p-6 rounded-xl w-[24rem] z-50 border border-gray-300 overflow-auto max-h-[90vh]">
      <h3 className="text-xl font-bold mb-4 text-[#384959]">📅 Task Calendar</h3>
      <p className="text-sm text-gray-600 mb-2">📅 Selected deadline: {date.toDateString()}</p>

      <Calendar
        onChange={onDateChange}
        value={date}
        tileClassName={tileClassName}
        className="rounded-lg border"
      />

      {/* Show Tasks on Selected Date */}
      <div className="mt-4">
        <h4 className="text-md font-semibold text-[#384959] mb-2">Tasks for {date.toDateString()}:</h4>
        {selectedTasks.length === 0 ? (
          <p className="text-sm text-gray-500">No tasks</p>
        ) : (
          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
            {selectedTasks.map((task, index) => (
              <li key={index}>{task.task_name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Task Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm"
        />
        <button
          type="submit"
          className="bg-[#6A89A7] text-white px-4 py-2 rounded-lg w-full hover:bg-[#384959] transition"
        >
          Add Task
        </button>
      </form>

      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskCalendar;
