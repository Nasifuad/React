import Todo from "./components/Todo";

const TodoApp = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen  flex flex-col items-center justify-center ">
      <div className=" bg-slate-800 rounded-3xl flex flex-col items-center justify-center gap-4 px-4 py-4">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
};
export default TodoApp;
