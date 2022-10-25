import styled, { css } from 'styled-components';

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div(
  ({ theme: { colors }}) => css`

    &::after {
      content: '';
      width: 33.125rem;
      height: 33.125rem;
      border-radius: 100%;
      position: absolute;
      border: 1px solid ${colors.blackBlue};
      opacity: 0.2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
)
