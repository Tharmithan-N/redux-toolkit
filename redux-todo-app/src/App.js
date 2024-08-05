import "./App.css";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="text-[36px] font-[600] text-center">
          Add your daily task here
        </div>
        <div className="pt-[20px]">
          <form>
            <input
              type="text"
              className="border-[1px] rounded-[5px] w-[350px] px-[10px] py-[7px] mr-[10px]"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-[18px] px-[10px] py-[5px] bg-blue-500 text-center rounded-md text-white"
            >
              Add
            </button>
          </form>
        </div>
        <div className="flex gap-[5px] mt-[20px] justify-between align-middle py-[10px] rounded-lg bg-[#4e4d4da8]">
          <div className="text-[18px] px-[10px] py-[5px] text-[#cbc9c9]">
            This is my first task
          </div>
          <div className="flex gap-[10px] mr-[10px]">
            <div className="text-[18px] px-[10px] py-[5px] bg-green-500 text-center rounded-md text-white flex items-center justify-center">
              <MdOutlineModeEdit className="mx-auto" />
            </div>
            <div className="text-[18px] px-[10px] py-[5px] bg-red-500 text-center rounded-md text-white flex items-center justify-center">
              <MdDeleteOutline className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
