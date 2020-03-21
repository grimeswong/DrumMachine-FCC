import React from 'react';
import './styles/main.scss';
import matchCode from './matchCode.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: ""
    }
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
      console.log(getCode);
      document.querySelector('#'+ getCode.key).src = getCode.src
      document.querySelector('#'+ getCode.key).play()
      this.setState({
        state: getCode.name
      })
    };
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <h1>Drum Machine FCC</h1>
          <div id="display">{this.state.state}
          </div>
          <div className="drum-pad-wrapper">
            <div className="row">
              <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="Q">Q
                <audio src="" className="clip" id="Q"></audio>
              </button>
              <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="W">W
                <audio src="" className="clip" id="W"></audio>
              </button>
              <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="E">E
                <audio src="" className="clip" id="E"></audio>
              </button>
            </div>
              <div className="row">
                <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="A">A
                  <audio src="" className="clip" id="A"></audio>
                </button>
                <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="S">S
                  <audio src="" className="clip" id="S"></audio>
                </button>
                <button className="drum-pad" onClick={(e)=>this.playSound(e, "click")} value="D">D
                  <audio src="" className="clip" id="D"></audio>
                </button>
              </div>
            <div className="row">
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
        </div>
      </div>
    );
  }

}

export default App;
