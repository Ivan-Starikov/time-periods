import { PropsWithChildren } from 'react';
import { Container, CrossedLines } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <CrossedLines />
      {children}
    </Container>
  )
};

export default Layout;
