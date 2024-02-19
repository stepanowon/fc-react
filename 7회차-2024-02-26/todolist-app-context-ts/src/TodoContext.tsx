import React, { useState } from "react";
import { produce } from "immer";

//TodoListItem  한건의 타입 선언
export interface TodoItemType {
  no: number;
  todo: string;
  done: boolean;
}

//Context provider의 value 값에 대한 타입 선언
//상태 데이터와 상태 변경 메서드를 구분하여 state, actions 속성으로 구분
export interface TodoContextValueType {
  state: { todoList: TodoItemType[] };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
}

//TodoProvider의 자식 컴포넌트 속성 type 선언
type PropsType = {
  children: JSX.Element | JSX.Element[];
};

//초기값 null을 부여할 수 있어야 하므로 null을 union
const TodoContext = React.createContext<TodoContextValueType | null>(null);

/**
 * ** 다음과 같이 사용함
 * <TodoProvider>
 *    <App />     ---> children
 * </TodoProvider>
 * 
 * **다음과 같이 렌더링함
 * <Context.Provider value={values}>
 *    {props.children}
 * </Context.Provider>
 */
export const TodoProvider = (props: PropsType) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([
    { no: 1, todo: "React학습1", done: false },
    { no: 2, todo: "React학습2", done: false },
    { no: 3, todo: "React학습3", done: true },
    { no: 4, todo: "React학습4", done: false },
  ]);

  const addTodo = (todo:string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no:number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no:number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  //상태와 상태 변경 메서드를 state, actions 속성으로 구분하여 설정
  const values: TodoContextValueType = {
    state: { todoList },
    actions: { addTodo, deleteTodo, toggleDone },
  };

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
