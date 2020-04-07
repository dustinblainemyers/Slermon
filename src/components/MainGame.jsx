import React, { Component } from "react";
import Buttons from './buttons';
class MainGame extends Component {
  constructor() {
    super();
    this.state = {

      button1toggle : 'buttonInner1',
      button2toggle : 'buttonInner2',
      button3toggle : 'buttonInner3',
      button4toggle : 'buttonInner4',
      patternArray: [1,2,3,4],
      gameMessage: "test"
    }
  }
  

      showPattern() {
    
     this.state.patternArray.map(number => {
      
      const asyncHandler =  () => {
         
        switch (number) {
          case 1:
               
               this.changeColor('button1toggle','buttonInner1')
           
            
             
            break;
          case 2:
            
              this.changeColor('button2toggle','buttonInner2')
           
            
            break;
          case 3:
            
              this.changeColor('button3toggle','buttonInner3')
           
            
            
            break;
            case 4:
           
                this.changeColor('button4toggle','buttonInner4')
             
              
              break;
          default:
            
        };

      }

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(asyncHandler())
        }, 1000);
    });
   
      
    
      
    });
    
    
    
  }

  async changeColor(toggle, button) {
    
     this.setState({[toggle]: button + " Active"})
     setTimeout(() => {
        this.setState({[toggle]: button})
     }, 1000)
     
  
   
 }

 componentDidMount() {
   this.showPattern();
 }


  render() {
    
    return (
      <div className="MainGame">
        <div className="circleHelper">
        <Buttons button1toggle={this.state.button1toggle} 
        button2toggle={this.state.button2toggle} button3toggle={this.state.button3toggle} 
        button4toggle={this.state.button4toggle}
        changeColor={this.changeColor.bind(this)} />
        </div> 
        <h2>{this.state.gameMessage}</h2>
      </div>
    );
  }
}

export default MainGame;
