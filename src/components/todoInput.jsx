const TodoInput = () => {
  return (
    <div>
      <input
        value={"Name"}
        className="px-4 py-2 text-center text-lg font-semibold rounded-full outline-none bg-slate-800 text-white border-2 border-gray-950"
        type="text"
        id="name"
        name="name"
      />
    </div>
  );
};

export default TodoInput;
