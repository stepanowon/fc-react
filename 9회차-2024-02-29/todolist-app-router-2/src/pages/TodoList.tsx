import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { TodoItemType, TodoStatesType } from "../redux/TodoReducer";
import TodoActionCreator from "../redux/TodoActionCreator";

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
  const dispatch = useDispatch();
  const todoList = useSelector((state:TodoStatesType)=>state.todoList);
  const toggleDone = (id: number) => dispatch(TodoActionCreator.toggleDone({ id }))
  const deleteTodo = (id: number) => dispatch(TodoActionCreator.deleteTodo({ id }))
  
  return <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleDone={toggleDone} />
}

export default TodoListContainer;
export { TodoList };
