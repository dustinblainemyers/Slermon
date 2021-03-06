import React, { Component } from "react";
import Buttons from "./buttons";
import Text from "./Text";

class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1toggle: false,
      button2toggle: false,
      button3toggle: false,
      button4toggle: false,
      patternArray: [],
      index: 0,

      lose: false,
      win: false,
      winCount: 1,
      computersTurn: true,
    };
  }

  wait(parm1, parm2) {
    this.setState({ index: this.state.index + 1 });
    this.changeColor(parm1, parm2);
  }

  check(toggle, button, buttonNumber) {
    if (this.state.computersTurn === false) {
      if (buttonNumber !== this.state.patternArray[0]) {
        this.setState({ lose: true });
      } else {
        let newArray = this.state.patternArray;
        newArray.shift();
        this.setState({ patternArray: newArray });
        if (this.state.patternArray.length === 0) {
          this.setState({ win: true });
          this.setState({ ready: false });
          this.setState({ winCount: this.state.winCount + 1 });

          const anotherPattern = this.newPattern();

          this.setState({ patternArray: anotherPattern });
          this.timerID = setInterval(() => this.showPattern(), 1000);
        }
      }

      this.changeColor(toggle, button);
    } else {
      console.log("its still computers turn");
    }
  }

  newPattern = () => {
    let workingArray = [];
    this.setState({ index: 0 });
    for (let winCount = this.state.winCount; winCount > 0; winCount--) {
      workingArray.push(Math.floor(Math.random() * 3 + 1));
    }
    console.log(workingArray);
    return workingArray;
  };

  showPattern() {
    this.setState({ computersTurn: true });
    switch (this.state.patternArray[this.state.index]) {
      case 1:
        this.wait("button1toggle", "buttonInner1");
        break;

      case 2:
        this.wait("button2toggle", "buttonInner2");
        break;

      case 3:
        this.wait("button3toggle", "buttonInner3");

        break;
      case 4:
        this.wait("button4toggle", "buttonInner4");

        break;
      default:
        clearInterval(this.timerID);
        this.setState({ computersTurn: false });
    }
  }

  async changeColor(toggle, button) {
    this.setState({ [toggle]: true });
    setTimeout(() => {
      this.setState({ [toggle]: false });
    }, 500);
  }

  componentDidMount() {
    this.setState({ patternArray: this.newPattern() });
    this.timerID = setInterval(() => this.showPattern(), 1000);
  }

  render() {
    return (
      <div className='MainGame'>
        <div className='circleHelper'>
          <Text class='title' text='Slermon' />
          <Buttons
            button1toggle={this.state.button1toggle}
            button2toggle={this.state.button2toggle}
            button3toggle={this.state.button3toggle}
            button4toggle={this.state.button4toggle}
            changeColor={this.changeColor.bind(this)}
            check={this.check.bind(this)}
            computersTurn={this.state.computersTurn}
          />
        </div>
        <p>{this.state.gameMessage}</p>
        {this.state.computersTurn === false && <p>Repeat The Pattern</p>}
        {this.state.lose && (
          <>
            <p>you lose</p>
          </>
        )}
        {!this.state.gameInProgress && <button>New Game</button>}
        {this.state.win && <p>Round Won !</p>}
        <p>Score: {this.state.winCount}</p>
      </div>
    );
  }
}

export default MainGame;
