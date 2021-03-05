import React from "react";

export const ClockForm = ({ input, setInput, zones, setZones }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      setZones([...zones, { city: input }]);
      setInput("");
    }
  };

  return (
    <div>
      <form>
        <input onChange={inputHandler} type="text" value={input} />
        <input onClick={submitHandler} type="submit" />
      </form>
    </div>
  );
};

//"http://worldtimeapi.org/api/timezone/Africa/{input}"
