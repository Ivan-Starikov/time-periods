import styled, { css } from 'styled-components';

export const Circle = styled.div(
  ({ theme: { colors }}) => css`
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    border: 1px solid ${colors.blackBlue};
    border-radius: 100%;
    z-index: 100;
  `
);

export const Dot = styled.span(
  ({ theme: { colors }}) => css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.375rem;
      height: 0.375rem;
      background-color: ${colors.blackBlue};
      border: 1px solid ${colors.blackBlue};
      border-radius: 100%;
  `,
);

export const Number = styled.span(
  ({ theme: { colors }}) => css`
      opacity: 0;
  `,
);
