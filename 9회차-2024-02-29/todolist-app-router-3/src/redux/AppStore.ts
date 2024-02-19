import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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

//currentTime 이 Date 타입이므로 이 타입의 값을 직렬화할 때의 경고를 막기 위해 미들웨어 속성 추가
const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export default AppStore;
