import TodoButton from "./components/TodoButton";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/todoInput";

const TodoApp = () => {
  return (
    <div className="bg-slate-900 h-screen w-screen  flex flex-col items-center justify-center ">
      <TodoInput />
      <TodoButton />
      <TodoItems />
    </div>
  );
};
export default TodoApp;
