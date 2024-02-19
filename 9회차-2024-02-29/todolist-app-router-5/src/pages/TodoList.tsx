import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import TodoActionCreator from "../redux/TodoActionCreator";
import { AppDispatch, RootStatesType, TodoItemType } from "../redux/AppStore";

type PropsType = {
  todoList: TodoItemType[];
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
};

const TodoList = ({ todoList, deleteTodo, toggleDone }: PropsType) => {
  let todoItems = todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
  });
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

const TodoListContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state:RootStatesType)=>state.todos.todoList);
  const toggleDone = (id: number) => dispatch(TodoActionCreator.toggleDone({ id }))
  const deleteTodo = (id: number) => dispatch(TodoActionCreator.deleteTodo({ id }))
  
  return <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleDone={toggleDone} />
}

export default TodoListContainer;
export { TodoList };
