
import useSimpleTimer from "./hooks/useSimpleTimer";

const SimpleTimer = () => {
  return (
    <div>
      <div className="container">{useSimpleTimer()}</div>    
    </div>
  );
};

export default SimpleTimer;
