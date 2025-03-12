"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todoList");
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };

  const handleRemoveTodo = (index: number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-lg mx-auto flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mt-10">My Tasks</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex gap-3">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="flex-1 border border-gray-200 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="What needs to be done?"
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            />
            <button 
              onClick={handleAddTodo} 
              className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <ul className="flex flex-col gap-3">
          {todoList.length === 0 ? (
            <li className="text-center py-8 text-gray-500 italic">No tasks yet. Add one above!</li>
          ) : (
            todoList.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center group hover:shadow-lg transition-shadow duration-200">
                <span className="text-gray-700">{item}</span>
                <button 
                  onClick={() => handleRemoveTodo(index)} 
                  className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors duration-200"
                  aria-label="Delete task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>
      </main>
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Stay organized, stay productive</p>
      </footer>
    </div>
  );
}
