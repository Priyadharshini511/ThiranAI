import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const Notifications = ({ onClose }) => {
  const { token } = useAuth();
  const [dueToday, setDueToday] = useState([]);
  const [dueTomorrow, setDueTomorrow] = useState([]);
  const [dueIn2Days, setDueIn2Days] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/get-tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const today = new Date();
        const oneDay = 24 * 60 * 60 * 1000;

        const groupTasks = {
          today: [],
          tomorrow: [],
          in2days: [],
        };

        res.data.tasks.forEach((task) => {
          const deadline = new Date(task.deadline);
          const diffDays = Math.floor((deadline - today) / oneDay);

          if (diffDays === 0) groupTasks.today.push(task);
          else if (diffDays === 1) groupTasks.tomorrow.push(task);
          else if (diffDays === 2) groupTasks.in2days.push(task);
        });

        setDueToday(groupTasks.today);
        setDueTomorrow(groupTasks.tomorrow);
        setDueIn2Days(groupTasks.in2days);
      } catch (err) {
        console.error("Failed to fetch notifications", err);
      }
    };

    if (token) fetchTasks();
  }, [token]);

  return (
    <div className="fixed top-28 right-24 bg-white shadow-xl p-6 rounded-xl w-80 z-50 border border-gray-300 max-h-[80vh] overflow-y-auto">
      <h3 className="text-lg font-bold mb-4 text-[#384959]">🔔 Notifications</h3>

      {dueToday.length === 0 && dueTomorrow.length === 0 && dueIn2Days.length === 0 ? (
        <p className="text-sm text-gray-500">No upcoming deadlines</p>
      ) : (
        <ul className="text-sm text-gray-800 space-y-3">
          {dueToday.length > 0 && (
            <li>
              <span className="font-semibold text-red-500">Due Today:</span>
              <ul className="list-disc pl-5">
                {dueToday.map((task, idx) => (
                  <li key={idx}>📌 {task.task_name}</li>
                ))}
              </ul>
            </li>
          )}

          {dueTomorrow.length > 0 && (
            <li>
              <span className="font-semibold text-orange-500">Due Tomorrow:</span>
              <ul className="list-disc pl-5">
                {dueTomorrow.map((task, idx) => (
                  <li key={idx}>⚠️ {task.task_name}</li>
                ))}
              </ul>
            </li>
          )}

          {dueIn2Days.length > 0 && (
            <li>
              <span className="font-semibold text-yellow-500">Due in 2 Days:</span>
              <ul className="list-disc pl-5">
                {dueIn2Days.map((task, idx) => (
                  <li key={idx}>⏳ {task.task_name}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      )}

      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  );
};

export default Notifications;
