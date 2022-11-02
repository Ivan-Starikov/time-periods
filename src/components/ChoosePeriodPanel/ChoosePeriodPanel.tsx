import useScreenSize from '../../hooks/useScreenSize';

import { handleRotation } from '../../utils/handleTimeChange';

import Button from '../Button/Button';

import { topicsType } from 'types/topics';

import { Wrapper, ButtonWrapper, Number } from './styled';

type Props = {
  currentTopic: topicsType;
  setCurrentTopic: (value: topicsType) => void;
};

const PeriodPanel = ({ currentTopic, setCurrentTopic }: Props) => {
  const { isMobile } = useScreenSize();

  const currentTopicNumber = currentTopic.find(({ angle }) => angle === 300)?.number;

  const handleButton = (step: number) => {
    const timeHandle = handleRotation(currentTopic, step);
    setCurrentTopic(timeHandle);
  };

  return (
    <Wrapper>
      <Number>0{currentTopicNumber}/06</Number>
      <ButtonWrapper>
        <Button size={!isMobile ? '50' : '25'} onClick={() => handleButton(-1)} disabled={currentTopicNumber === 1} />
        <Button size={!isMobile ? '50' : '25'} onClick={() => handleButton(1)} disabled={currentTopicNumber === 6} flipped />
      </ButtonWrapper>
    </Wrapper>
  )
};

export default PeriodPanel;
