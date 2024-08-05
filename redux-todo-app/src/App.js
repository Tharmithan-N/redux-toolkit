// import "./App.css";
// import React, { useState } from "react";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { MdDeleteOutline } from "react-icons/md";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo } from "./redux/slice";

// function App() {
//   let [value, setValue] = useState();
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (value.trim()) {
//       dispatch({ type: "addTodo", payload: value });
//       setValue(""); // Clear the input field after submission
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div>
//         <div className="text-[36px] font-[600] text-center">
//           Add your daily task here
//         </div>
//         <div className="pt-[20px]">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               className="border-[1px] rounded-[5px] w-[350px] px-[10px] py-[7px] mr-[10px]"
//               onChange={handleChange}
//               value={value} //need to bind the value of this field to the state
//             />
//             <button
//               type="submit"
//               className="text-[18px] px-[10px] py-[5px] bg-blue-500 text-center rounded-md text-white"
//             >
//               Add
//             </button>
//           </form>
//         </div>
//         {todos.map((todo) => {
//           return (
//             <div
//               className="flex gap-[5px] mt-[20px] justify-between align-middle py-[10px] rounded-lg bg-[#4e4d4da8]"
//               key={todo}
//             >
//               <div className="text-[18px] px-[10px] py-[5px] text-[#cbc9c9]">
//                 {todo}
//               </div>
//               <div className="flex gap-[10px] mr-[10px]">
//                 <div className="text-[18px] px-[10px] py-[5px] bg-green-500 text-center rounded-md text-white flex items-center justify-center">
//                   <MdOutlineModeEdit className="mx-auto" />
//                 </div>
//                 <div className="text-[18px] px-[10px] py-[5px] bg-red-500 text-center rounded-md text-white flex items-center justify-center">
//                   <MdDeleteOutline className="mx-auto" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/slice";

function App() {
  let [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

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
              {todo}
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
        ))}
      </div>
    </div>
  );
}

export default App;
