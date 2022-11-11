import { useState } from 'react';
import words from './list.json';
import './App.scss';

function App() {

  const [guessWord, setGuessWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [letterGuess, setLetterGuess] = useState<string[]>([]);


  return (
    <div className="app__main">
      <div className="app__header">
        Lose Win
      </div>
      <Sketch />
      <Word />
      <Keyboard />
    </div>
  )
}

export default App
