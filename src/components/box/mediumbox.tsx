"use client";

import React, { useState } from "react";

interface Task {
  id: number;
  task: string;
  iscomplit: boolean;
}

function MIdbox(props: any) {
  const [count, setCount] = useState<string>("");
  const [task, setTask] = useState<Task[]>([]);

  function addTask() {
    if (count.trim()) {
      const newTask: Task = {
        id: Date.now(),
        task: count,
        iscomplit: false,
      };
      setTask([...task, newTask]);
      setCount("");
    }
  }

  function toggleTaskCompletion(itemId: number) {
    setTask((prevTasks) =>
      prevTasks.map((item) =>
        item.id === itemId ? { ...item, iscomplit: !item.iscomplit } : item
      )
    );
  }

  return (
    <div className="flex flex-col gap-4 p-10">
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="border p-2 rounded"
        placeholder="Enter a task"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>

      {task.length > 0 && (
        <div className="mt-4 space-y-2">
          {task.map((item) => (
            <div
              key={item.id}
              className={`border p-2 rounded flex justify-between items-center ${
                item.iscomplit ? "bg-green-200 line-through" : "bg-gray-100"
              }`}
            >
              <span>{item.task}</span>
              <button
                onClick={() => toggleTaskCompletion(item.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
              >
                {item.iscomplit ? "Undo" : "Complete"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MIdbox;
