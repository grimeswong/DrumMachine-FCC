import React from 'react';
import matchCode from './matchCode.js';

const Drumpad = (props) => {
  return matchCode.map((element) => {
    return (
      <button key={element.src} className="drum-pad" onClick={(e) => props.playSound(e.target.value)} value={element.key}>{element.key}
        <audio src={element.src} className="clip" id={element.key}></audio>
      </button>
    )
  })
}

export default Drumpad;
