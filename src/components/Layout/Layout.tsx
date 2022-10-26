import { PropsWithChildren } from 'react';
import { Container, CrossedLines, CircleLine } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <CrossedLines />
      <CircleLine />
      {children}
    </Container>
  )
};

export default Layout;
