import './Sketch.scss';

const Sketch = () => {
  return (
    <div className="app__sketch">
      <img className='app__head' src="src\assets\head.png" alt="head" />
      <div className="app__torso" />
      <img className="app__right-arm" src="src\assets\right.png" alt="right-arm" />
      <img className="app__left-arm" src="src\assets\left.png" alt="left-arm" />
      <img className="app__left-leg" src="src\assets\left-leg.png" alt="left-leg" />
      <img className="app__right-leg" src="src\assets\right-leg.png" alt="right-leg" />
      <div className="app__drop-bar" />
      <div className="app__top-bar" />
      <div className="app__middle-bar" />
      <div className="app__bottom-bar" />
    </div>
  )
}

export default Sketch