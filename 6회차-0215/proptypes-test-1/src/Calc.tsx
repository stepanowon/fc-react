type CalcPropsTypes = {
  x: number;
  y: number;
  oper: string;
};

const Calc = (props: CalcPropsTypes) => {
  let result: number = 0;
  switch (props.oper) {
    case "+":
      result = props.x + props.y;
      break;
    case "*":
      result = props.x * props.y;
      break;
    default:
      result = 0;
  }
  return (
    <div>
      <h3>연산 방식 : {props.oper}</h3>
      <hr />
      <div>
        {props.x} {props.oper} {props.y} = {result}
      </div>
    </div>
  );
};

export default Calc;

