import React, { Component } from "react";
import Buttons from "./buttons";
class MainGame extends Component {
  constructor() {
    super();
    this.state = {
      button1toggle: "buttonInner1",
      button2toggle: "buttonInner2",
      button3toggle: "buttonInner3",
      button4toggle: "buttonInner4",
      patternArray: [1, 2, 3, 4],
      gameMessage: "test",
      index: 0,
    };
  }

  wait(parm1, parm2) {
    this.changeColor(parm1, parm2);
    this.setState({ index: this.state.index + 1 });
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
    const mountFunction = async () => {
      if (this.state.index === 0) {
        this.showPattern();
      }
    };

    mountFunction();
  }

  componentDidUpdate() {
    const mountFunction = async () => {
      if (this.state.index < this.state.patternArray.length) {
        this.showPattern();
      }
    };

    mountFunction();
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
          />
        </div>
        <h2>{this.state.gameMessage}</h2>
      </div>
    );
  }
}

export default MainGame;
