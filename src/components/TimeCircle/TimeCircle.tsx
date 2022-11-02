import { MouseEvent } from 'react';
import { gsap } from 'gsap';

import Dot from '../Dot/Dot';

import { handleRotation } from '../../utils/handleTimeChange';
import { clickProps } from './animationData';

import { topicsType } from '../../types/topics';

import { CenterWrapper, DotsWrapper } from './styled';

type Props = {
  currentTopic: topicsType;
  setCurrentTopic: (value: topicsType) => void;
  currentTopicNumber: number;
};

const TimeCircle = ({ currentTopic, setCurrentTopic, currentTopicNumber }: Props) => {

  const onDotClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    const chosenTopicNumber = Number(currentTarget.innerText);
    const step = chosenTopicNumber - currentTopicNumber;
    const timeHandle = handleRotation(currentTopic, step);

    setCurrentTopic(timeHandle);

    gsap.to(currentTarget, clickProps);
    gsap.to(currentTarget.firstChild, { opacity: 1 });
   };

  return (
    <>
      <CenterWrapper>
        <DotsWrapper>
          {currentTopic.map(({ number, angle, topic }) => (
            <Dot key={number} number={number} angle={angle} topic={topic} onClick={onDotClick} />
          ))}
        </DotsWrapper>
      </CenterWrapper>
    </>
  )
};

export default TimeCircle;
