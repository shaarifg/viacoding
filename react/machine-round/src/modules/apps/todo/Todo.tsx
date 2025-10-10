import React, { useState, FormEvent } from "react";
import "./Todo.css";

const Todo: React.FC = () => {
  // State type → array of strings
  const [todos, setTodos] = useState<string[]>([]);

  // submit the data
  const submitTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newTodoItem = formData.get("todo") as string;

    if (newTodoItem) {
      setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    }

    event.currentTarget.reset();
  };

  // edit data
  const handleEdit = (idx: number) => {
    console.log("Edit item index:", idx);
  };

  return (
    <div className="flex max-w-fit mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Todo List
        </h2>

        {/* Form */}
        <form onSubmit={submitTodo} className="flex gap-3">
          <input
            type="text"
            name="todo"
            placeholder="Enter todo item"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <div>
          <p className="text-xl font-bold text-gray-700 mb-3">To-Do Items:</p>
          {todos.length === 0 ? (
            <p className="text-gray-500 italic">No todos yet. Add one above!</p>
          ) : (
            <ul className="space-y-2">
              {todos.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 shadow-sm flex items-center justify-between"
                >
                  <p>{item}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="text-blue-600 hover:underline"
                    >
                      edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
