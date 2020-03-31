import React, { Component } from "react";
import Buttons from './buttons';
class MainGame extends Component {
  constructor() {
    super();
    this.state = {

      button1toggle : 'buttonInner1',
      button2toggle : 'buttonInner2',
      button3toggle : 'buttonInner3',
      button4toggle : 'buttonInner4'
    }
  }
  

    changeColor(toggle, button) {
    
    
     this.setState({: "buttonInner1 Active"})
    setTimeout(() => {
      this.setState({toggle: button})
    }, 100)
    
  }



  render() {
    
    return (
      <div className="MainGame">
        <div className="circleHelper">
        <Buttons button1toggle={this.state.button1toggle}  changeColor={this.changeColor.bind(this)} />
        </div>
      </div>
    );
  }
}

export default MainGame;
