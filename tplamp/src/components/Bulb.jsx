import React, { useState } from "react";
import bulbOn from "../assests/pic_bulbonOn.gif";
import bulbOff from "../assests/pic_bulboff.gif";

function Bulb() {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <div>
      <button onClick={handleClick}>{isOn ? "Turn Off" : "Turn On"}</button>
      {isOn ? (
        <img src={bulbOn} alt="bulb on" />
      ) : (
        <img src={bulbOff} alt="bulb off" />
      )}
    </div>
  );
}

export default Bulb;
