import { IntroBgScene } from '@Components/webgl/IntroBgScene';

export const Intro : React.FC = ({ }) => {
  return (
    <div
      className='section__intro'
      id='home'
    >
      <div className='avatar__container'>
        <img src="https://avatars.githubusercontent.com/u/44675974?v=4" alt="" />
      </div>
      <h1>hi, I&apos;m <span className='name'>andromeda</span>.</h1>
      <div className='intro__description'>
        I&apos;m a <b>computer engineering</b> student from Hungary.
        I have profound interest in front-end development, computer graphics and much more.
      </div>
      <div className='intro__bg__webgl'>
        <IntroBgScene />
      </div>
    </div>
  );
}