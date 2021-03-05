import React, { useState, useEffect } from "react";
import { ClockForm } from "./ClockForm";
import { Clocks } from "./Clocks";
import "./ClockBody.scss";

export const ClockBody = () => {
  const [input, setInput] = useState("");
  const [zones, setZones] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    formatData();
  }, [zones]);
  const formatData = () => {
    zones.forEach((zone) => {
      fetch(`http://worldtimeapi.org/api/timezone/Africa/${zone.city}`)
        .then((res) => res.json())
        .then((data) => {
          setTimes([...times, { time: data.datetime, city: data.timezone }]);
        });
    });
  };

  return (
    <div className="clock-body">
      <div className="headings">
        <h1 className="header">World Clock</h1>
        <h3 className="sub-header">every city, every time-zone</h3>
      </div>

      <ClockForm
        input={input}
        setInput={setInput}
        zones={zones}
        setZones={setZones}
      />
      <Clocks times={times} setTimes={setTimes} />
    </div>
  );
};
