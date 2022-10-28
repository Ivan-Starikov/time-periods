import { MouseEvent, useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

import { handleRotation } from '../../utils/handleTimeChange';

import Dot from '../Dot/Dot';
import ChoosePeriodPanel from '../ChoosePeriodPanel/ChoosePeriodPanel';

import { topics } from '../../data/topics';

import { topicsType } from '../../types/topics';

import { Wrapper, DotsWrapper, PanelWrapper } from './styled';

const TimeCircle = () => {
  const [currentTopic, setCurrentTopic] = useState<topicsType>(topics);
  const currentTopicNumber = currentTopic.find(({ angle }) => angle === 300)!.number;
  const dotsRef = useRef(null);
  // const radius = 16.56;

  const onDotClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    const chosenTopicNumber = Number(currentTarget.innerText);
    const step = chosenTopicNumber - currentTopicNumber;
    const timeHandle = handleRotation(currentTopic, step, true);

    setCurrentTopic(timeHandle);
  };

  useEffect(() => {

    gsap.to(dotsRef.current, {
      rotation: 60, duration: 1
    });
  }, [currentTopic]);

  return (
    <>
      <Wrapper>
        <DotsWrapper ref={dotsRef}>
          {currentTopic.map(({ number, angle }) => (
            <Dot key={number} number={number} angle={angle} onClick={onDotClick} />
          ))}
        </DotsWrapper>
        <PanelWrapper>
          <ChoosePeriodPanel currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
        </PanelWrapper>
      </Wrapper>
    </>
  )
};

export default TimeCircle;
