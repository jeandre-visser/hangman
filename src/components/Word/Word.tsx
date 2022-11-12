import './Word.scss';

type WordProps = {
  letterGuesses: string[];
  guessedWord: string;
}

const Word = ({ guessedWord, letterGuesses }: WordProps) => {

  return (
    <div className="app__word">
      {guessedWord.split('').map((letter, index) => (
        <span className="app__letters" key={index}>
          <span style={{ visibility: letterGuesses.includes(letter) ? 'visible' : 'hidden' }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default Word