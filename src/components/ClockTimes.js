import React from "react";
import moment from "moment";
import "./ClockTimes.scss";

export const ClockTimes = ({ time, times, setTimes, city, clock }) => {
  const deleteTime = () => {
    setTimes(times.filter((el) => el.city !== time.city));
  };

  return (
    <div className="city-section">
      <div className="date-time">
        <div className="time">
          {moment(clock.split("+")[0]).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
        <div className="location">{city}</div>
      </div>
      <i onClick={deleteTime} className="delete-time fa fa-times-circle"></i>
    </div>
  );
};

// MMMM Do YYYY, h:mm:ss a
