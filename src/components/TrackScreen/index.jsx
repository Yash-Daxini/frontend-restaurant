import { useState } from "react";
import Clock from "../Clock";
import styles from "./style.module.css";
import { RWebShare } from "react-web-share";

const TrackScreen = () => {
  const [speed, setSpeed] = useState(1);

  const handleSliderChange = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div className="App">
      <Clock speed={speed} />
      <div className="controls">
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={speed}
          onChange={handleSliderChange}
        />
        <RWebShare
          data={{
            text: "Share Screen Tracker",
            url: "https://react-assignment-yash.netlify.app/trackScreen",
            title: "Tracker screen",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <button className={`${styles.shareBtn}`}>Share</button>
        </RWebShare>
      </div>
    </div>
  );
};

export default TrackScreen;
