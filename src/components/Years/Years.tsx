import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { YearsWrapper, StartYear, EndYear } from './styled';
import { topicsType } from '../../types/topics';

type Props = {
  currentTopic: topicsType;
  currentTopicNumber: number;
};

const Years = ({ currentTopic, currentTopicNumber}: Props) => {

  const startYearRef = useRef(null);
  const endYearRef = useRef(null);

  useEffect(() => {
    currentTopic.filter(({ number }) => number === currentTopicNumber).map(({ startYear, endYear }) => {
      gsap.to(startYearRef.current, {
        innerText: startYear,
        snap: 'innerText',
      });

      gsap.to(endYearRef.current, {
        innerText: endYear,
        snap: 'innerText',
      });
    });
  }, [currentTopic]);

  return (
    <>
      {currentTopic.filter(({ number }) => number === currentTopicNumber).map(({ number }) => (
        <YearsWrapper key={number}>
          <StartYear ref={startYearRef}></StartYear>
          <EndYear ref={endYearRef}></EndYear>
        </YearsWrapper>
      ))}
    </>
  );
};

export default Years;
