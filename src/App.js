import React from 'react';
import './styles/main.scss';
import matchCode from './matchCode.js';

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
    let value = method ==="click"? e.target.value : e.keyCode;
    const getCode = matchCode.find((element) => {
      return element.key === value || element.keyCode === value;
    })
    console.log("playSound...");
    if(getCode!==undefined){
      document.querySelector('#'+ getCode.key).play()
    };
  }

  render() {
    return (
      <div className="App">Drum Machine FCC
        <div id="drum-machine">
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="Q">Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="W">W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="E">E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="E"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="A">A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="S">S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="S"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="D">D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="Z">Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="X">X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="C">C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" id="C"></audio>
          </button>
        </div>
      </div>
    );
  }

}

export default App;
