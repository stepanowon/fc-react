import { configureStore } from "@reduxjs/toolkit";
import { Middleware, combineReducers } from "redux";
import TimeReducer from "./TimeReducer";
import TodoReducer from "./TodoReducer";

const RootReducer = combineReducers({
  home: TimeReducer,
  todos: TodoReducer,
});

const logger: Middleware = (store) => (next) => (action) => {
  console.log("전달된 액션 : ", action)
  console.log("리듀서 실행 전 상태 : ", store.getState());
  next(action);
  console.log("리듀서 실행 후 상태 : ", store.getState());
};

const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat([logger]);
  },
});

export type AppDispatch = typeof AppStore.dispatch
export type RootStatesType = ReturnType<typeof AppStore.getState>;
export type TodoItemType = RootStatesType["todos"]["todoList"][0];

export default AppStore;
