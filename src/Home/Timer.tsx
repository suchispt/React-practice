import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(10);

  const isComponentMonted = useRef(false);

  // timmer task
  useEffect(() => {
    const Tracktimer = setInterval(() => {
      if (count < 0) return;
      setCount((prev) => {
        if (prev == 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(Tracktimer);
    };
  }, [count]);

  useEffect(() => {
    if (count == 0) {
      console.log("Countdown ends !!!");
    }
  });

  useEffect(() => {
    if (!isComponentMonted.current) {
      console.log("Component Monted");
      isComponentMonted.current = true;
    }
  }, []);
  return (
    <>
      {count !== 0 && <p>CountDown: {count}</p>}
      {count == 0 && <p>CountDown ended !!</p>}
    </>
  );
};

export default Timer;
