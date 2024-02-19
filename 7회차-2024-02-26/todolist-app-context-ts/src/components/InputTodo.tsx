import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import TodoContext from "../TodoContext";

const InputTodo = () => {
  const value = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  //value의 type이 TodoContextValueType | null임
  //value가 null일수도 있기 때문에 value?.actions.addTodo(todo)와 같이 ? 사용
  const addHandler = () => {
    value?.actions.addTodo(todo); 
    setTodo("");
  };
  //이벤트 아규먼트 타입 주의
  const enterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };
  //이벤트 아규먼트 타입 주의
  const changeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input id="msg" type="text" className="form-control" name="msg"
            placeholder="할일을 여기에 입력!" value={todo}
            onChange={changeTodo} onKeyUp={enterInput} />
          <span className="btn btn-primary input-group-addon" 
             onClick={addHandler}>
            추가
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
