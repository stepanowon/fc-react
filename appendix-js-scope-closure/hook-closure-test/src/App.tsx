import { useState } from "react";
import Timer from "./Timer";

const App = () => {
  const [seconds1] = useState<number>(5);
  const [seconds2] = useState<number>(4);

  return (
    <div>
        <Timer seconds={seconds1} message={'타이머1 완료'} />
        <hr />
        <Timer seconds={seconds2} message={'타이머2 완료'}/>
    </div>
  )
};

export default App;
