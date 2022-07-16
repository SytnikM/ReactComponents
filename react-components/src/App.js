import './App.css';
import React, {Component} from 'react';
import Carusel from './Components/Carusel';
class App extends Component {
  state = {
      tasks: []
  }
  render() {
    return(
      <div className='App-header'>
        <Carusel />
      </div>
    )
  }
}

export default App;
