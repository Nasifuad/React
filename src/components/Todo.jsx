import React, { useRef } from "react";

const Btn = () => {
  return (
    <button
      className="rounded text-center p-3 bg-slate-700 text-white hover:bg-slate-900 hover:text-slate-300 transition-all"
      onClick={clickHandle}
    >
      Add
    </button>
  );
};
const inputData = useRef();
const Input = () => {
  return (
    <input
      type="text"
      value="Add Task"
      ref={inputData}
      className="rounded text-center p-3 bg-slate-700 text-white hover:bg-slate-900 hover:text-slate-300 transition-all"
    />
  );
};
const clickHandle = () => {
  console.log({inputData.value})
};
const Todo = () => {
  return (
    <div className="flex gap-3 relative ">
      <Input />
      <Btn />  <Btn />
    </div>
  );
};

export default Todo;
