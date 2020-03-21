import React from 'react';
import './styles/main.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">Drum Machine FCC
        <div id="drum-machine">
          <button className="drum-pad">Q
            <audio src="" className="clip" id="id1"></audio>
          </button>
          <button className="drum-pad">W
            <audio src="" className="clip" id="id2"></audio>
          </button>
          <button className="drum-pad">E
            <audio src="" className="clip" id="id3"></audio>
          </button>
          <button className="drum-pad">A
            <audio src="" className="clip" id="id4"></audio>
          </button>
          <button className="drum-pad">S
            <audio src="" className="clip" id="id5"></audio>
          </button>
          <button className="drum-pad">D
            <audio src="" className="clip" id="id6"></audio>
          </button>
          <button className="drum-pad">Z
            <audio src="" className="clip" id="id7"></audio>
          </button>
          <button className="drum-pad">X
            <audio src="" className="clip" id="id8"></audio>
          </button>
          <button className="drum-pad">C
            <audio src="" className="clip" id="id9"></audio>
          </button>
        </div>
      </div>
    );
  }

}

export default App;
