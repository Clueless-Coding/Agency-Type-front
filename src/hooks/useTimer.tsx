import { useCallback, useEffect, useRef, useState } from "react"

const useTimer = (value: number, interval = 1000) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState<number>(value);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - interval;
        }
        if (prev === 0) clearInterval(intervalRef.current!);
        return prev;
      });
    }, interval);
  }, [interval]);

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null; 
    setTimer(value);
  }, [value]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [interval]);

  return {
    timer,
    startTimer,
    resetTimer,
  };
};
export default useTimer