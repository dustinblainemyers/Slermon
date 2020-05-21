import React, { Component } from "react";
import red from "../SVG/red.svg";
import green from "../SVG/green.svg";
import purple from "../SVG/purple.svg";
import yellow from "../SVG/yellow.svg";
import black from "../SVG/black.svg";
import blue from "../SVG/blue.svg";

const Buttons = (props) => {
  return (
    <>
      <div
        className={props.button1toggle}
        key='0'
        onClick={() => props.check("button1toggle", "buttonInner1", 1)}
      >
        {" "}
        <img src={(props.button1toggle && red) || black} alt='testAsset' />
      </div>
      <div
        className={props.button2toggle}
        key='1'
        onClick={() => props.check("button2toggle", "buttonInner2", 2)}
      >
        <img src={(props.button2toggle && blue) || black} alt='testAsset' />
      </div>
      <div
        className={props.button3toggle}
        key='2'
        onClick={() => props.check("button3toggle", "buttonInner3", 3)}
      >
        <img src={(props.button3toggle && yellow) || black} alt='testAsset' />
      </div>
      <div
        className={props.button4toggle}
        key='3'
        onClick={() => props.check("button4toggle", "buttonInner4", 4)}
      >
        <img src={(props.button4toggle && purple) || black} alt='testAsset' />
      </div>
    </>
  );
};

export default Buttons;
