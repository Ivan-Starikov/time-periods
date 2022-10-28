import Button from '../Button/Button';
import { handleRotation } from '../../utils/handleTimeChange';

import { topicsType } from 'types/topics';
import { Wrapper, ButtonWrapper } from './styled';

type Props = {
  currentTopic: topicsType;
  setCurrentTopic: (value: topicsType) => void;
};

const PeriodPanel = ({ currentTopic, setCurrentTopic }: Props) => {

  console.log(currentTopic, 'currentTopic');

  const currentTopicNumber = currentTopic.find(({ angle }) => angle === 300)?.number;

  const handleButton = () => {
    const timeHandle = handleRotation(currentTopic, 1, true);
    setCurrentTopic(timeHandle);
  };

  return (
    <Wrapper>
      <span>0{currentTopicNumber}/06</span>
      <ButtonWrapper>
        <Button size="50" stroke="#42567a" onClick={handleButton} disabled={currentTopicNumber === 1} />
        <Button size="50" stroke="#42567a" flipped onClick={handleButton} disabled={currentTopicNumber === 6} />
      </ButtonWrapper>
    </Wrapper>
  )
};

export default PeriodPanel;
