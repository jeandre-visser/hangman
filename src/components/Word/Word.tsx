import './Word.scss';

import React from 'react'

const Word = () => {
  const word = 'test';
  return (
    <div className="app__word">
      {word.split('').map((letter, index) => (
        <span className="app__letters">{letter}</span>
      ))}
    </div>
  )
}

export default Word