import Counter from "../components/Counter";
import { useCounter } from "../components/hooks/useCounter";

const ShowCounter = () => {
  const quantity = useCounter(0);

  return (
    <div className="myCounter">
      <Counter
        result={quantity.number}
        onPlus={quantity.plus}
        onMinus={quantity.minus}
        onReset={quantity.reset}
      />
    </div>
  );
};

export default ShowCounter;
