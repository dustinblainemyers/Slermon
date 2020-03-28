import React, { Component } from "react";
import Buttons from './buttons';
class MainGame extends Component {
  render() {
    return (
      <div className="MainGame">
        <div className="circleHelper">
        <Buttons/>
        </div>
      </div>
    );
  }
}

export default MainGame;
