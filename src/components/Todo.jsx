import React from "react";
import { FaRegCheckCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className="w-full bg-white my-4 py-2 px-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaRegCheckCircle className="text-lg text-yellow-500 cursor-pointer" />
        <p className="text-xl font-semibold">{todo}</p>
      </div>
      <div className="flex items-center gap-2">
        <FaRegEdit className="text-lg text-emerald-600 cursor-pointer" />
        <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
      </div>
    </li>
  );
};

export default Todo;
