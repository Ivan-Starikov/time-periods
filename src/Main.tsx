import { useState } from 'react';

import useScreenSize from './hooks/useScreenSize';

import Layout from './components/Layout/Layout';
import TimeCircle from './components/TimeCircle/TimeCircle';
import Heading from './components/Heading/Heading';
import Swiper from './components/Swiper/Swiper';
import ChoosePeriodPanel from './components/ChoosePeriodPanel/ChoosePeriodPanel';
import Years from './components/Years/Years';

import { topics } from './data/topics';

import { topicsType } from './types/topics';

const Main = () => {
  const [currentTopic, setCurrentTopic] = useState<topicsType>(topics);
  const currentTopicNumber = currentTopic.find(({ angle }) => angle === 300)!.number;

  const { isMobile } = useScreenSize();

  return (
    <Layout>
      <Heading />
      {!isMobile && (
        <>
          <TimeCircle
            currentTopic={currentTopic}
            setCurrentTopic={setCurrentTopic}
            currentTopicNumber={currentTopicNumber}
          />
          <ChoosePeriodPanel
            currentTopic={currentTopic}
            setCurrentTopic={setCurrentTopic}
          />
        </>
      )}
      <Years
        currentTopic={currentTopic}
        currentTopicNumber={currentTopicNumber}
      />
      <Swiper
        currentTopic={currentTopic}
        currentTopicNumber={currentTopicNumber}
        setCurrentTopic={setCurrentTopic}
      />
    </Layout>
  );
};

export default Main;
