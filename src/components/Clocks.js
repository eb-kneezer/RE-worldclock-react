import React from "react";
import "./Clocks.scss";
import { ClockTimes } from "./ClockTimes";

export const Clocks = ({ times, setTimes }) => {
  return (
    <div className="clocks">
      {times.map((time, index) => (
        <ClockTimes
          key={index}
          city={time.city}
          clock={time.time}
          setTimes={setTimes}
          times={times}
          time={time}
        />
      ))}
    </div>
  );
};
