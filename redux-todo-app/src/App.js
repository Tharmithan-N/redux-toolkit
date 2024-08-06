import "./App.css";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./redux/slice";

function App() {
  let [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setEditingIndex(index);
    setValue(todo);
  };

  const handleUpdate = (index) => {
    dispatch(editTodo({ index, value: value.trim() }));
    setEditingIndex(null);
    setValue("");
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="text-[36px] font-[600] text-center">
          Add your daily task here
        </div>
        <div className="pt-[20px]">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-[1px] rounded-[5px] w-[350px] px-[10px] py-[7px] mr-[10px]"
              onChange={handleChange}
              value={value}
              autoFocus={editingIndex === null}
            />
            <button
              type="submit"
              className="text-[18px] px-[10px] py-[5px] bg-blue-500 text-center rounded-md text-white"
            >
              Add
            </button>
          </form>
        </div>
        {todos.map((todo, index) => (
          <div
            className="flex gap-[5px] mt-[20px] justify-between align-middle py-[10px] rounded-lg bg-[#4e4d4da8]"
            key={index} // Use index or a unique id if available
          >
            <div className="text-[18px] px-[10px] py-[5px] text-[#cbc9c9]">
              {editingIndex === index ? (
                <input
                  type="text"
                  className="border-[1px] rounded-[5px] w-[350px] px-[10px] py-[7px] mr-[10px]"
                  onChange={handleChange}
                  value={value}
                  onBlur={() => handleUpdate(index)}
                  autoFocus
                />
              ) : (
                todo
              )}
            </div>
            <div className="flex gap-[10px] mr-[10px]">
              <div
                className="text-[18px] px-[10px] py-[5px] bg-green-500 text-center rounded-md text-white flex items-center justify-center"
                onClick={() => handleEdit(index)}
              >
                <MdOutlineModeEdit className="mx-auto" />
              </div>
              <div
                className="text-[18px] px-[10px] py-[5px] bg-red-500 text-center rounded-md text-white flex items-center justify-center"
                onClick={() => handleDelete(index)}
              >
                <MdDeleteOutline className="mx-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
