import style from './Keyboard.module.scss';

const keys = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

type KeyboardProps = {
  activeLetter: string[]
  inactiveLetter: string[]
  addLetterGuessed: (letter: string) => void
  disabled?: boolean
}

const Keyboard = ({ inactiveLetter, activeLetter, addLetterGuessed, disabled = false }: KeyboardProps) => {

  return (
    <div className={style.app__keyboard}>
      {keys.map((key) => {
        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetter.includes(key)

        return (
        <button
         key={key} 
         className={`${style.btn} ${isActive ? style.active : ''} ${isInactive ? style.inactive : ''}`} 
         onClick={() => addLetterGuessed(key)}
         disabled={isActive || isInactive || disabled}
         >{key}</button>
      )
      })}
    </div>
  )
}

export default Keyboard