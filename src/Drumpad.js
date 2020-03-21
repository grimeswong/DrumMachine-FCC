import React from 'react';
import matchCode from './matchCode.js';

const Drumpad = (props) => {
  return matchCode.map((element) => {
    const tasks = (e) => {
      props.playSound(e.target.value);
      props.setDisplay(element.name);
    }

    return (
      <button key={element.src} className="drum-pad" id={element.name} onClick={tasks} value={element.key}>{element.key}
        <audio src={element.src} className="clip" id={element.key}></audio>
      </button>
    )
  })
}

export default Drumpad;
