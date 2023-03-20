import React from "react";
import useHover from "./hooks/useHover";

const HoverElement = () => {
  return (
    <div className="container">
      <div className="divUseHover">{useHover("#aa00ff","Move your mouse over the button and you will see a lilac message!")}</div>
      <div className="divUseHover">{useHover("red","Move your mouse over the button and you will see a red message!")}</div>
      <div className="divUseHover">{useHover("#090080","Move your mouse the  over button and you will see a blue message!!")}</div>
    </div>
  );
};

export default HoverElement;
