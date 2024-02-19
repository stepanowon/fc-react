import React, { useState } from "react";
import { produce } from 'immer';

const TodoContext = React.createContext(null);

export const TodoProvider = (props) => {
    const [todoList, setTodoList] = useState([
        { no: 1, todo: "React학습1", done: false },
        { no: 2, todo: "React학습2", done: false },
        { no: 3, todo: "React학습3", done: true },
        { no: 4, todo: "React학습4", done: false },
    ]);

    const addTodo = (todo) => {
        let newTodoList = produce(todoList, (draft) => {
          draft.push({ no: new Date().getTime(), todo: todo, done: false });
        });
        setTodoList(newTodoList);
    };
    
    const deleteTodo = (no) => {
        let index = todoList.findIndex((todo) => todo.no === no);
        let newTodoList = produce(todoList, (draft) => {
          draft.splice(index, 1);
        });
        setTodoList(newTodoList);
    };
    
    const toggleDone = (no) => {
        let index = todoList.findIndex((todo) => todo.no === no);
        let newTodoList = produce(todoList, (draft) => {
          draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
    };

    const values = {
        state: { todoList },
        actions : { addTodo, deleteTodo, toggleDone },
    }

    return (
        <TodoContext.Provider value={values}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContext;