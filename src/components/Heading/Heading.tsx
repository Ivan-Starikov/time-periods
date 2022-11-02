import useScreenSize from '../../hooks/useScreenSize';

import { Wrapper, Header, GradientLine } from './styled';

const Heading = () => {
  const { isMobile } = useScreenSize();

  return (
    <Wrapper>
      {!isMobile && <GradientLine />}
      <Header>Исторические <br/> даты</Header>
    </Wrapper>
  )
};

export default Heading;
