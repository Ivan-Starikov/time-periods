import { MouseEvent, useState } from 'react';
import { gsap } from 'gsap';

import Dot from '../Dot/Dot';

import { topics } from '../../data/topics';

import { topicsType } from '../../types/topics';

import { Wrapper } from './styled';

const TimeCircle = () => {
  const [currentTopic, setCurrentTopic] = useState<topicsType>(topics);

  const onDotClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    const chosenTopicNumber = Number(currentTarget.innerText);
    const step = 60;

    setCurrentTopic([...currentTopic].map(prevState => {

      const actualAngles = prevState.number < chosenTopicNumber ? ((chosenTopicNumber - prevState.number) * 60)
      : prevState.number < chosenTopicNumber ? ((prevState.number - chosenTopicNumber) * 60)
      : prevState.angle

      return {
        ...prevState,
        angle: actualAngles,
      };
    }));
  };

  return (
    <Wrapper>
      {currentTopic.map(({ number, angle }) => (
        <Dot key={number} number={number} angle={angle} onClick={onDotClick} />
      ))}
    </Wrapper>
  )
};

export default TimeCircle;
