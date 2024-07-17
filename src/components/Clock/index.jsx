import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const Clock = ({ speed }) => {
  const [time, setTime] = useState(new Date());
  const endTime = useRef(new Date());

  useEffect(() => {
    endTime.current.setHours(time.getHours() - 2);

    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = now - endTime.current;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTime(endTime.current);
      } else {
        setTime(now);
      }
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed,time]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let hour_rotation = 30 * hours + minutes / 2;
  let minute_rotation = 6 * minutes;
  let second_rotation = 6 * seconds;

  return (
    <div className={`${styles.clockDiv}`}>
      <div className={`${styles.clock}`}>
        <div
          className={`${styles.hand} ${styles.hour}`}
          style={{ transform: `rotate(${hour_rotation}deg)` }}
        ></div>
        <div
          className={`${styles.hand} ${styles.minute}`}
          style={{ transform: `rotate(${minute_rotation}deg)` }}
        ></div>
        <div
          className={`${styles.hand} ${styles.second}`}
          style={{ transform: `rotate(${second_rotation}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;
