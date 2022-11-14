import { images } from '../../constants';

const HEAD = (
  <img className='app__head' src={images.head} alt="head" />
);

const TORSO = (
  <div className="app__torso" />
);

const RIGHT_ARM = (
  <img className="app__right-arm" src={images.rightArm} alt="right-arm" />
)

const LEFT_ARM = (
  <img className="app__left-arm" src={images.leftArm} alt="left-arm" />
)

const RIGHT_LEG = (
  <img className="app__right-leg" src={images.rightLeg} alt="right-leg" />
)

const LEFT_LEG = (
  <img className="app__left-leg" src={images.leftLeg} alt="left-leg" />
)

export const BODY = [HEAD, TORSO, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];