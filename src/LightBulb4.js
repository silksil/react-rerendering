import React, { useState, memo, useMemo, useCallback, useRef } from "react";

const Button = memo(({ onClick, children }) => (
  <button onClick={onClick}> {children} </button>
));

const Power = ({ children }) => <p>{children}</p>;

const PowerSwitch = () => {
  let [power, setPower] = useState("Off");

  const setOn = useMemo(
    () => () => {
      setPower("On");
    },
    []
  );

  const setOff = useRef(() => {
    setPower("Off");
  });

  return (
    <div>
      <Power>{power}</Power>
      <Button onClick={setOn}>On</Button>
      <Button onClick={setOff.current}>Off</Button>
    </div>
  );
};

export default PowerSwitch;
