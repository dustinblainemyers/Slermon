import React, { Component } from "react";


const Buttons = (props) => {

 
 
    
    
    return (
      <div className="buttonOuter">
          <div className={props.button1toggle} key="0" onClick={() => props.changeColor('button1toggle','buttonInner1')} ></div>
          <div className={props.button2toggle} key="1"></div>
          <div className={props.button3toggle} key="3"></div>
          <div className={props.button4toggle} key="4"></div>
        
      </div>
    );
  }



  Buttons.defaultProps = {
    button1toggle : 'buttonInner1',
    button2toggle : 'buttonInner2',
    button3toggle : 'buttonInner3',
    button4toggle : 'buttonInner4'
  }

export default Buttons;
