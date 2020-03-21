import React from 'react';
import './styles/main.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }

  playSound(e, key) {
    console.log(e.target.value);
    console.log("playSound...")
  }

  render() {
    return (
      <div className="App">Drum Machine FCC
        <div id="drum-machine">
          <button className="drum-pad" onClick={this.playSound} value="Q">Q
            <audio src="" className="clip" id="id1"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="W">W
            <audio src="" className="clip" id="id2"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="E">E
            <audio src="" className="clip" id="id3"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="A">A
            <audio src="" className="clip" id="id4"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="S">S
            <audio src="" className="clip" id="id5"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="D">D
            <audio src="" className="clip" id="id6"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="Z">Z
            <audio src="" className="clip" id="id7"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="X">X
            <audio src="" className="clip" id="id8"></audio>
          </button>
          <button className="drum-pad" onClick={this.playSound} value="C">C
            <audio src="" className="clip" id="id9"></audio>
          </button>
        </div>
      </div>
    );
  }

}

export default App;
