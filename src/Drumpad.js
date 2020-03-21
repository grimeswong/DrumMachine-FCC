import React from 'react';
import matchCode from './matchCode.js';

const Drumpad = (props) => {
  return (
    <button className="drum-pad" onClick={(e) => props.playSound(e.target.value)} value="Q">Q
      <audio src="" className="clip" id="Q"></audio>
    </button>
  )
}

export default Drumpad;
