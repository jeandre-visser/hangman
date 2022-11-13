import './Keyboard.scss';

const keys = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

type KeyboardProps = {
  activeLetter: string[]
  inactiveLetter: string[]
  addLetterGuessed: (letter: string) => void
}

const Keyboard = ({ inactiveLetter, activeLetter, addLetterGuessed }: KeyboardProps) => {
  return (
    <div className="app__keyboard">
      {keys.map((key) => (
        <button key={key} className="btn" >{key}</button>
      ))}
    </div>
  )
}

export default Keyboard