import { PropsWithChildren } from 'react';

import useScreenSize from '../../hooks/useScreenSize';

import { Container, CrossedLines, CircleLine } from './styled';

const Layout = ({ children }: PropsWithChildren) => {
  const { isMobile } = useScreenSize();

  return (
    <Container>
      {!isMobile && (
        <>
          <CrossedLines />
          <CircleLine />
        </>
      )}
      {children}
    </Container>
  )
};

export default Layout;
