import { useState } from 'react';

function App() {

  const [guessWord, setGuessWord] = useState('test');
  
  return (
    <h1>Hangman</h1>
  )
}

export default App
