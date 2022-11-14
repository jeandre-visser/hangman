import { useCallback, useEffect, useState } from 'react';
import words from './list.json';
import './App.scss';
import Sketch from './components/Sketch/Sketch';
import Word from './components/Word/Word';
import Keyboard from './components/Keyboard/Keyboard';


const getNextWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {

  const [guessedWord, setGuessedWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [letterGuesses, setLetterGuesses] = useState<string[]>([]);

  const wrongLetters = letterGuesses.filter(letter => !guessedWord.includes(letter));

  const lost = wrongLetters.length >= 6;
  const win = guessedWord.split("").every(letter => letterGuesses.includes(letter));

  const addLetterGuessed = useCallback((letter: string) => {
    // if letter has already been guessed, then return
    if (letterGuesses.includes(letter) || lost || win) return;

    // otherwise add the letter into all the other pressed letters
    setLetterGuesses(pressedLetters => [...pressedLetters, letter])
  }, [letterGuesses, win, lost]);


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

  const handleReset = () => {
      setLetterGuesses([]);
      setGuessedWord(getNextWord());
  }

  return (
    <div className="app__main">
      <nav className='app__nav'>
        <div className='app__nav-title' style={ win || lost ? {display: 'none'} : {display: 'flex'} }>
          <h1>Hangman</h1>
          <img src="src\assets\head.png" alt="head" />
        </div>
      <div className="app__header">
        {win && 'You Win!'}
        {win && <img src="src\assets\win.png" alt="winner" />}
        {lost && 'Try again!'}
        {lost && <img src="src\assets\lose.png" alt="loser" />}
      </div>
      </nav>
      <Sketch numOfGuesses={wrongLetters.length} />
      <Word guessedWord={guessedWord} letterGuesses={letterGuesses} showWord={lost}/>
      <Keyboard 
        activeLetter={letterGuesses.filter(letter => guessedWord.includes(letter))} 
        inactiveLetter={wrongLetters}
        addLetterGuessed={addLetterGuessed}
        disabled={win || lost}
      />
      <footer>
        <button className="app__reset-btn" onClick={handleReset}>New Word</button>
      </footer>
    </div>
  )
}

export default App
