import { useState } from "react";
import CountryList from "./CountryList";
import styles from "./styles";

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

const App = () => {
  const [msg] = useState<string>("World");
  const [list] = useState<Array<CountryType>>([
    { no: 1, country: "이집트", visited: false },
    { no: 2, country: "일본", visited: true },
    { no: 3, country: "피지", visited: false },
    { no: 4, country: "콜롬비아", visited: false },
  ]);

  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div className="container">
      <h2>Hello {msg}!</h2>
      <hr style={styles.dashStyle} />
      {addResult(4, 3)}
      <CountryList countries={list} />
    </div>
  );
};

export default App;
