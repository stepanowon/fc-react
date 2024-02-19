import { configureStore } from "@reduxjs/toolkit";
import { Middleware, combineReducers } from "redux";
import TimeReducer, { TimeStatesType } from "./TimeReducer";
import TodoReducer, { TodoStatesType } from "./TodoReducer";

export type RootStatesType = {
  home: TimeStatesType;
  todos: TodoStatesType;
};

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

export default AppStore;
