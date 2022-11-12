import './Word.scss';

import React from 'react'

const Word = () => {
  const word = 'show';
  const guesses = ["s"];
  return (
    <div className="app__word">
      {word.split('').map((letter, index) => (
        <span className="app__letters" key={index}>
          <span style={{ visibility: guesses.includes(letter) ? 'visible' : 'hidden' }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default Word