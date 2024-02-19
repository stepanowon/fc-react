import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";
import {  TodoItemType } from "./AppContainer";

type PropsType = {
  todoList: TodoItemType[];
  addTodo: (todo: string, desc: string) => void;
  deleteTodo: (id: number) => void;
  toggleDone: (id: number) => void;
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void;
};

const App = ({ todoList, addTodo, deleteTodo, toggleDone, updateTodo }: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todos" element={<TodoList todoList={todoList} deleteTodo={deleteTodo} toggleDone={toggleDone} />} />
          <Route path="todos/add" element={<AddTodo addTodo={addTodo} />} />
          <Route path="todos/edit/:id" element={<EditTodo todoList={todoList} updateTodo={updateTodo} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
