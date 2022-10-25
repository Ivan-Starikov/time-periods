import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import { Dot, Number } from './styled';

const Step = () => {

  const onEnter = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      background: '#e5e5e5',
      width: '3.5rem',
      height: '3.5rem',
      zIndex: '100',
    })
    gsap.fromTo( "#number",{ opacity: 0 }, { opacity: 1 });
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      width: '0.375rem',
      height: '0.375rem',
      background: '#42567a',
    })
    gsap.to( "#number", { opacity: 0 });
  };

  return (
    <>
      <Dot onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Number id="number">1</Number>
      </Dot>
    </>
  )
};

export default Step;
