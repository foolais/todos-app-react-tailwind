import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Todo from "./Todo";
import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const MySwal = withReactContent(Swal);

  // create Todo
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!input.length) {
      MySwal.fire("Please enter a valid value");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read Todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //   update data
  const handleUpdateStatus = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //   edit todo
  const handleEdit = async (id, text) => {
    await updateDoc(doc(db, "todos", id), { text });
  };

  //   delete Todo
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-emerald-600 to-emerald-700 p-8">
      <div className="w-3/4 xl:w-1/3 mx-auto bg-teal-400 p-4 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center">Todo App</h1>
        <form onSubmit={handleCreate} className="flex justify-between">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Activity..."
            type="text"
            className="w-10/12 rounded-md outline-none py-2 px-5"
          />
          <button className="outline-none bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-5 rounded-md">
            <FaPlus />
          </button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <Todo
              key={i}
              todo={todo}
              handleUpdateStatus={handleUpdateStatus}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
