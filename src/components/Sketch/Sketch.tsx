import './Sketch.scss';
import { BODY } from './Body';

type SketchProps = {
  numOfGuesses: number;
}

const Sketch = ({ numOfGuesses }: SketchProps) => {
  return (
    <div className="app__sketch">
      {BODY}
      <div className="app__drop-bar" />
      <div className="app__top-bar" />
      <div className="app__middle-bar" />
      <div className="app__bottom-bar" />
    </div>
  )
}

export default Sketch