import React from 'react';
import './styles/main.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.addEventListener('keydown', (e)=> {
      this.playSound(e, "keyboard");
    })
  }

  playSound(e, method) {
    // to do: define the condition that match the value or keyCode
    let value = method ==="click"? e.target.value : e.keyCode;
    console.log(value);
    console.log("playSound...")
  }

  render() {
    return (
      <div className="App">Drum Machine FCC
        <div id="drum-machine">
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="Q">Q
            <audio src="" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="W">W
            <audio src="" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="E">E
            <audio src="" className="clip" id="E"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="A">A
            <audio src="" className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="S">S
            <audio src="" className="clip" id="S"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="D">D
            <audio src="" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="Z">Z
            <audio src="" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="X">X
            <audio src="" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="C">C
            <audio src="" className="clip" id="C"></audio>
          </button>
        </div>
      </div>
    );
  }

}

export default App;
