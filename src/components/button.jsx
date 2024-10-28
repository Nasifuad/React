import { useState } from "react";

const Button = () => {
  function clickHandle() {
    setName(count + 1);
  }
  let [count, setName] = useState(211);
  return (
    <div>
      <button
        onClick={clickHandle}
        className="text-slate-800 bg-green-600 px-9 py-3 border-red-600 text-2xl"
      >
        Count
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Button;
