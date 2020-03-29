import React, {Component} from 'react';

import './App.css';
import MainGame from './components/MainGame';

class App extends Component {
    
  constructor() {
    super();
    this.state = {

      button1toggle : 'buttonInner1',
      button2toggle : 'buttonInner2',
      button3toggle : 'buttonInner3',
      button4toggle : 'buttonInner4'
    }
  }

 
  render() {
      
     return (
      <div className="App" >
            <MainGame/>
            

            
      </div>

     

    )

  }

  
}

export default App;
