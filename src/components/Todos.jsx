import React from "react";
import { FaPlus } from "react-icons/fa";
import Todo from "./Todo";

const Todos = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-emerald-600 to-emerald-700 p-8">
      <div className="w-1/3 mx-auto bg-teal-400 p-4 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center">Todo App</h1>
        <form className="flex justify-between">
          <input
            placeholder="add activity..."
            type="text"
            className="w-10/12 rounded-md outline-none py-2 px-5"
          />
          <button className="outline-none bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-5 rounded-md">
            <FaPlus />
          </button>
        </form>
        <ul>
          <Todo todo="react" />
        </ul>
      </div>
    </div>
  );
};

export default Todos;
