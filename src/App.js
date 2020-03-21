import React from 'react';
import './styles/main.scss';
import Drumpad from './Drumpad.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: ""
    }
    this.setDisplay = this.setDisplay.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e)=> {
      this.playSound(e.key.toUpperCase(), "keyboard");
    })
  }

  setDisplay(name) {
    this.setState({
      state: name
    })
  }

  playSound(key) {
    console.log(`key = ${key}`);
    console.log("play sound...")
    document.getElementById(`${key}`).play()
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <h1>Drum Machine FCC</h1>
          <div id="display">{this.state.state}
          </div>
          <div className="drum-pad-wrapper">
            <Drumpad playSound={this.playSound} setDisplay={this.setDisplay}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
