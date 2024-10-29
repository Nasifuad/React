import React from "react";
import TodoInput from "./todoInput";
const TodoButton = () => {
  function handleClick(value) {
    console.log(value);
  }
  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full  text-lg font-bold hover:scale-105 transition-all"
        onClick={handleClick()}
      >
        Add
      </button>
    </>
  );
};

export default TodoButton;
