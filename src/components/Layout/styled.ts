import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme: { colors }}) => css`
    max-width: 90rem;
    height: 100vh;
    margin: 0 auto;

    &::after, &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: ${colors.blackBlue};
      opacity: 0.2;
    }

    &::after {
      right: -1px;
    }

    &::before {
      left: -1px;
    }
  `
);

export const CrossedLines = styled.div(
  ({ theme: { colors }}) => css`
    &::after, &::before {
      content: '';
      position: absolute;
      background-color: ${colors.blackBlue};
      opacity: 0.2;
    }

    &::after {
      height: 1px;
      width: 100%;
      top: 50%;
    }

    &::before {
      width: 1px;
      height: 100%;
      left: 50%;
    }
  `
);
