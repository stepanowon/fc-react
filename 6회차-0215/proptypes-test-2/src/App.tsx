import { useState } from "react";
import Calc from "./Calc";

const App = () => {
  const [x, setX] = useState<number>(101);
//  const [y, setY] = useState<string>("ab");
//  const [oper, setOper] = useState<string>("&");

  return (
    <div>
      <Calc x={x} />
    </div>
  );
};

export default App;
