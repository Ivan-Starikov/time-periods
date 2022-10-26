import { MouseEvent } from 'react';
import { gsap } from 'gsap';

import { enterProps, leaveProps } from './animationData';
import { AnimatedDot, Number } from './styled';

type Props = {
  number: number,
  angle: number,
  onClick: (target: MouseEvent<HTMLElement>) => void;
}

const Dot = ({ number, angle, onClick }: Props) => {
  const onEnter = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    gsap.to(currentTarget, enterProps)
    gsap.to(currentTarget.firstChild, { opacity: 1 })
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, leaveProps)
    gsap.to(currentTarget.firstChild, { opacity: 0 });
  };

  return (
    <>
      <AnimatedDot angle={angle} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={onClick}>
        <Number id="number">{number}</Number>
      </AnimatedDot>
    </>
  )
};

export default Dot;
