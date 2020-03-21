import React from 'react';
import './styles/main.scss';
import Drumpad from './Drumpad.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: ""
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (e)=> {
      this.playSound(e.key.toUpperCase(), "keyboard");
    })
  }

  playSound(key) {
    console.log(`key = ${key}`);
    console.log("play sound...")
    document.querySelector(`#${key}`).play();
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <h1>Drum Machine FCC</h1>
          <div id="display">{this.state.state}
          </div>
          <div className="drum-pad-wrapper">
            <Drumpad playSound={this.playSound}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
