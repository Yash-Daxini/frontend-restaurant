import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Clock from "../Clock";

const TrackScreen = () => {
  const history = useNavigate();
  const location = useLocation();
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const savedSpeed = parseFloat(params.get("speed"));
    if (savedSpeed) setSpeed(savedSpeed);
  }, [location.search]);

  const handleSliderChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleShare = () => {
    const url = new URL(window.location);
    url.searchParams.set("speed", speed);
    history.push(url.toString());
  };

  return (
    <div className="App">
      <Clock speed={speed} />
      <div className="controls">
        <input
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={speed}
          onChange={handleSliderChange}
        />
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default TrackScreen;
