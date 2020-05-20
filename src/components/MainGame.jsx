import React, { Component } from "react";
import Buttons from "./buttons";
class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1toggle: "buttonInner1",
      button2toggle: "buttonInner2",
      button3toggle: "buttonInner3",
      button4toggle: "buttonInner4",
      patternArray: [1, 2, 3, 4],
      gameMessage: "test",
      index: 0,
      ready: false,
      lose: false,
      win: false,
    };
  }

  wait(parm1, parm2) {
    this.setState({ index: this.state.index + 1 });
    this.changeColor(parm1, parm2);
  }

  check(toggle, button, buttonNumber) {
    if (this.state.ready === true) {
      if (buttonNumber !== this.state.patternArray[0]) {
        this.setState({ lose: true });
      } else {
        let newArray = this.state.patternArray;
        newArray.shift();
        this.setState({ patternArray: newArray });
        if (this.state.patternArray.length === 0) {
          this.setState({ win: true });
          this.setState({ ready: false });
        }
      }

      this.changeColor(toggle, button);
    }
  }
  showPattern() {
    setTimeout(() => {
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
          this.setState({ ready: true });
      }
    }, 1000);
  }

  async changeColor(toggle, button) {
    this.setState({ [toggle]: button + " Active" });
    setTimeout(() => {
      this.setState({ [toggle]: button });
    }, 1000);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.showPattern(), 1000);
  }

  render() {
    return (
      <div className='MainGame'>
        <div className='circleHelper'>
          <Buttons
            button1toggle={this.state.button1toggle}
            button2toggle={this.state.button2toggle}
            button3toggle={this.state.button3toggle}
            button4toggle={this.state.button4toggle}
            changeColor={this.changeColor.bind(this)}
            check={this.check.bind(this)}
          />
        </div>
        <h2>{this.state.gameMessage}</h2>
        {this.state.ready && <h2>Repeat The Pattern</h2>}
        {this.state.lose && <h2>you lose</h2>}
        {this.state.win && <h2>you win!!</h2>}
      </div>
    );
  }
}

export default MainGame;
