import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const Clock = ({ speed }) => {
  const [time, setTime] = useState(new Date());
  const endTime = useRef(new Date());

  useEffect(() => {
    endTime.current.setHours(endTime.current.getHours() - 2);

    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = endTime.current - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTime(endTime.current);
      } else {
        setTime(now);
      }
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  const hours = ((time.getHours() % 12) / 12) * 360 - 90;
  const minutes = (time.getMinutes() / 60) * 360 - 90;
  const seconds = (time.getSeconds() / 60) * 360 - 90;

  return (
    <div className={`${styles.clock}`}>
      <div
        className={`${styles.hand} ${styles.hour}`}
        style={{ transform: `rotate(${hours}deg)` }}
      ></div>
      <div
        className={`${styles.hand} ${styles.minute}"`}
        style={{ transform: `rotate(${minutes}deg)` }}
      ></div>
      <div
        className={`${styles.hand} ${styles.second}`}
        style={{ transform: `rotate(${seconds}deg)` }}
      ></div>
    </div>
  );
};

export default Clock;
