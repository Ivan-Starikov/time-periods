import { MouseEvent, useRef } from 'react';
import { gsap } from 'gsap';

import { enterProps, leaveProps } from './animationData';
import { OpenedDot, ClosedDot, Topic, Number } from './styled';

type Props = {
  number: number,
  angle: number,
  topic: string,
  onClick: (target: MouseEvent<HTMLElement>) => void;
}

const Dot = ({ number, angle, topic, onClick }: Props) => {
  const dotsRef = useRef(null);

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
      {angle === 300 ? (
        <>
          <OpenedDot angle={angle} onClick={onClick} ref={dotsRef}>
            <Number>{number}</Number>
            <Topic>{topic}</Topic>
          </OpenedDot>
        </>
      ) : (
        <ClosedDot angle={angle} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={onClick} ref={dotsRef}>
          <Number id="number" animated>{number}</Number>
        </ClosedDot>
      )}
    </>
  )
};

export default Dot;
