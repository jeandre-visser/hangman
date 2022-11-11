import './Sketch.scss';

const Sketch = () => {
  return (
    <div className="app__sketch">
      <img className='app__head' src="src\assets\head.png" alt="head" />
      <div className="app__torso" />
      <div className="app__drop-bar" />
      <div className="app__top-bar" />
      <div className="app__middle-bar" />
      <div className="app__bottom-bar" />
    </div>
  )
}

export default Sketch