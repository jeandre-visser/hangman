import { useCallback, useEffect, useState } from 'react';
import words from './list.json';
import './App.scss';
import Sketch from './components/Sketch/Sketch';
import Word from './components/Word/Word';
import Keyboard from './components/Keyboard/Keyboard';

function App() {

  const [guessedWord, setGuessedWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [letterGuesses, setLetterGuesses] = useState<string[]>([]);

  const wrongLetters = letterGuesses.filter(letter => !guessedWord.includes(letter));

  const addLetterGuessed = useCallback((letter: string) => {
    // if letter has already been guessed, then return
    if (letterGuesses.includes(letter)) return;

    // otherwise add the letter into all the other pressed letters
    setLetterGuesses(pressedLetters => [...pressedLetters, letter])
  }, [letterGuesses]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      // if key pressed isn't a-z, ignore
      if (!key.match(/^[a-zA-Z]$/)) return;
      event.preventDefault();
      addLetterGuessed(key);
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [letterGuesses])

  return (
    <div className="app__main">
      <div className="app__header">
        Lose Win
      </div>
      <Sketch numOfGuesses={wrongLetters.length} />
      <Word guessedWord={guessedWord} letterGuesses={letterGuesses} />
      <Keyboard />
    </div>
  )
}

export default App
