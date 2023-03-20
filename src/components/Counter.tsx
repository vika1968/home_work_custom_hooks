import { FC } from 'react';

interface CounterParams {
  result: number;
  onPlus: () => void;
  onMinus: () => void;
  onReset: () => void;
};

const Counter: FC<CounterParams> = ({  result,  onPlus,  onMinus,  onReset,}) => {
  return (
    <div className="container">
    <div className="counter">      
      <div className="quantity">{result}</div> 
      <div className="counter-functions">
          <div className="plus" onClick={() => onPlus()}>+</div>
          <div className="reset" onClick={() => onReset()}>reset</div>
          <div className="minus" onClick={() => onMinus()}>-</div>
      </div>
    </div>
    </div>
  );
};

export default Counter;
