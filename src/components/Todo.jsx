import React, { useState } from "react";
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";

const Todo = ({ todo, handleUpdateStatus, handleEdit, handleDelete }) => {
  const [newText, setNewText] = useState(todo.text);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewText(todo.text);
    } else {
      todo.text = "";
      setNewText(e.target.value);
    }
  };

  return (
    <li className="w-full bg-white my-4 py-2 px-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        {todo.completed ? (
          <>
            <FaCheckCircle
              onClick={() => handleUpdateStatus(todo)}
              className="text-lg text-emerald-600 cursor-pointer"
            />
          </>
        ) : (
          <>
            <FaRegCheckCircle
              onClick={() => handleUpdateStatus(todo)}
              className="text-lg text-yellow-500 cursor-pointer"
            />
          </>
        )}
        <input
          value={todo.text === "" ? newText : todo.text}
          onChange={handleChange}
          type="text"
          className={`p-1 outline-1 outline-emerald-600 text-xl font-semibold ${
            todo.completed ? "line-through" : null
          }`}
        />
      </div>
      <div className="flex items-center gap-2">
        <FaRegEdit
          onClick={() => handleEdit(todo.id, newText)}
          className="text-lg text-emerald-600 cursor-pointer"
        />
        <FaRegTrashAlt
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 text-lg cursor-pointer"
        />
      </div>
    </li>
  );
};

export default Todo;
