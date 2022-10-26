import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme: { colors }}) => css`
    max-width: 90rem;
    height: 100vh;
    margin: 0 auto;
    position: relative;

    &::after, &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: ${colors.blackBlue2};
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
      background-color: ${colors.blackBlue2};
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

export const CircleLine = styled.div(
  ({ theme: { colors }}) => css`
    width: 33.125rem;
    height: 33.125rem;
    border-radius: 100%;
    position: absolute;
    border: 1px solid ${colors.blackBlue2};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
);
