import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import {  ADD_TODO, DELETE_TODO, GET_TODOS, TOGGLE_TODO } from "./todoSlice";

export default function Todo() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((s) => s.todo);

  useEffect(() => {
    dispatch(GET_TODOS());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
  <div className="max-w-xl mx-auto p-6 bg-white shadow-sm">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-800">My Todo List</h2>
      <button
        onClick={() => dispatch(ADD_TODO("Learn Redux"))}
        className="bg-primary text-white px-4 py-2 font-semibold hover:bg-primary/90 transition"
      >
        + Add
      </button>
    </div>

    <ul className="space-y-3">
      {items.map((t) => (
        <li
          key={t.id}
          className="flex items-center justify-between bg-gray-50 border border-gray-200 px-4 py-3 hover:bg-gray-100 transition"
        >
          <div
            className={`flex-1 cursor-pointer ${
              t.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
            onClick={() => dispatch(TOGGLE_TODO(t.id))}
          >
            {t.title}
          </div>

          <div className="flex gap-2 ml-4">
            <button
              className="bg-primary text-white text-sm px-3 py-1 hover:bg-secondary/90 transition"
              onClick={() => alert(`Edit todo: ${t.title}`)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white text-sm px-3 py-1 hover:bg-red-600 transition"
              onClick={() => dispatch(DELETE_TODO(t.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>

    {items.length === 0 && (
      <p className="text-center text-gray-500 italic mt-8">
        No todos yet — add one above!
      </p>
    )}
  </div>
);

}
