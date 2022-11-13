import './Word.scss';

type WordProps = {
  letterGuesses: string[];
  guessedWord: string;
  showWord?: boolean
}

const Word = ({ guessedWord, letterGuesses, showWord = false }: WordProps) => {

  return (
    <div className="app__word">
      {guessedWord.split('').map((letter, index) => (
        <span className="app__letters" key={index}>
          <span style={{ visibility: letterGuesses.includes(letter) || showWord ? 'visible' : 'hidden',
        color: !letterGuesses.includes(letter) && showWord ? "#ff2222" : "#000" }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default Word