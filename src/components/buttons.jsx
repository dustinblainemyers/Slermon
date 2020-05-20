import React, { Component } from "react";
import Asset from "../SVG/Asset4.svg";

const Buttons = (props) => {
  return (
    <>
      <div
        className={props.button1toggle}
        key='0'
        onClick={() => props.check("button1toggle", "buttonInner1", 1)}
      >
        {" "}
        <img src={Asset} alt='testAsset' />
      </div>
      <div
        className={props.button2toggle}
        key='1'
        onClick={() => props.check("button2toggle", "buttonInner2", 2)}
      >
        <img src={Asset} alt='testAsset' />
      </div>
      <div
        className={props.button3toggle}
        key='2'
        onClick={() => props.check("button3toggle", "buttonInner3", 3)}
      >
        <img src={Asset} alt='testAsset' />
      </div>
      <div
        className={props.button4toggle}
        key='3'
        onClick={() => props.check("button4toggle", "buttonInner4", 4)}
      >
        <img src={Asset} alt='testAsset' />
      </div>
    </>
  );
};

export default Buttons;
