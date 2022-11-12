import { useState } from 'react';
import words from './list.json';
import './App.scss';
import Sketch from './components/Sketch/Sketch';
import Word from './components/Word/Word';
import Keyboard from './components/Keyboard/Keyboard';

function App() {

  const [guessWord, setGuessWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [letterGuesses, setLetterGuesses] = useState<string[]>([]);

  const wrongLetters = letterGuesses.filter(letter => !guessWord.includes(letter))

  return (
    <div className="app__main">
      <div className="app__header">
        Lose Win
      </div>
      <Sketch numOfGuesses={wrongLetters.length} />
      <Word />
      <Keyboard />
    </div>
  )
}

export default App
