import { PositionType, useMousePosition } from "./hooks/useMousePosition";


const App = () => {
  const position : PositionType = useMousePosition();

  return (
    <h2>
      커스텀 훅 적용 [ {position.x}, {position.y} ]
    </h2>
  );
};

export default App;
