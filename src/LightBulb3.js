import React, { useState, memo, useMemo, useCallback } from "react";

const Button = memo(({ onClick, children }) => (
  <button onClick={onClick}> {children} </button>
));

const Power = ({ children }) => <p>{children}</p>;

const PowerSwitch = () => {
  let [power, setPower] = useState("Off");

  const setOn = () => setPower("On");

  const setOff = useCallback(() => {
    setPower("Off");
  }, []);

  return (
    <div>
      <Power>{power}</Power>
      <Button onClick={setOn}>On</Button>
      <Button onClick={setOff}>Off</Button>
    </div>
  );
};

export default PowerSwitch;
