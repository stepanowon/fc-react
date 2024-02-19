import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import TodoContext from "../TodoContext";

const TodoList = () => {
  const value = useContext(TodoContext);

  let items = value?.state.todoList.map((item) => {
    return <TodoListItem key={item.no} todoItem={item} 
            deleteTodo={value?.actions.deleteTodo} 
            toggleDone={value?.actions.toggleDone} />;
  });

  return (
    <div className="row">
      {" "}
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
};

export default TodoList;
