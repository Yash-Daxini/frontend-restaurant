import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const Clock = ({ speed }) => {
  const [time, setTime] = useState(new Date());
  const endTime = useRef(new Date());
  let speedOfClock = parseInt(speed);

  useEffect(() => {
    endTime.current.setHours(time.getHours() - 2);
  }, []);

  useEffect(() => {
    if (time < endTime.current) return;

    const interval = setInterval(() => {
      if (time >= endTime.current)
        setTime(new Date(time - 1000 * speedOfClock));
      else clearInterval(interval);

      console.warn(time);
      console.warn("end ", endTime.current);
    }, 1000 / speedOfClock);

    return () => clearInterval(interval);
  }, [speedOfClock, time]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let hour_rotation = 30 * hours + minutes / 2;
  let minute_rotation = 6 * minutes;
  let second_rotation = 6 * seconds;

  return (
    <div className={`${styles.trackerDiv}`}>
      <div className={`${styles.messageDiv}`}>
        {time < endTime.current
          ? <span>Time runned out!</span>
          : <></>
        }
      </div>
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
    </div>
  );
};

export default Clock;
