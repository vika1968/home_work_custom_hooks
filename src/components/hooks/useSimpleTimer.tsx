import { useEffect, useState } from "react";

const useSimpleTimer = () => {
  const [time, setTime] = useState(0);
  const [turnedOn, setTurnedOn] = useState(false);

  useEffect(() => {
    let duration: any;
    
    if (turnedOn) {
      duration = setInterval(() => {
        setTime((prevValue) => prevValue + 10);
      }, 10);
    } else  {
      clearInterval(duration);
    }
    return () => clearInterval(duration);
  }, [turnedOn]);

  return (
    <div className="simple-timer">

      <div className="timer-numbers">
        {/* Hours */}
        <div>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</div>
         {/* Seconds */}
        <div>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</div>
         {/* Milliseconds */}
        <div>{("0" + ((time / 10) % 100)).slice(-2)}</div>
      </div>
      
      <div className="timer-buttons">
        <button onClick={() => setTurnedOn(true)}>Start Timer</button>
        <button onClick={() => setTurnedOn(false)}>Stop Timer</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};
export default useSimpleTimer;
