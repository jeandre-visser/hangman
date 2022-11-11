import { useState } from 'react';
import words from './list.json';

function App() {

  const [guessWord, setGuessWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  console.log(guessWord)
  return (
    <h1>Hangman</h1>
  )
}

export default App
