import styled, { css } from 'styled-components';

type Props = {
  angle: number;
};

export const AnimatedDot = styled.span<Props>(
  ({ theme: { colors }, angle }) => css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 0.375rem;
      height: 0.375rem;
      transform: rotate(${angle}deg) translate(16.563rem) rotate(-${angle}deg);
      background-color: ${colors.blackBlue};
      border: 1px solid ${colors.blackBlue2};
      top: -2px;
      left: -3px;
      border-radius: 100%;
      cursor: pointer;
    `,
);

export const Number = styled.span(
  ({ theme: { colors }}) => css`
      opacity: 0;
  `,
);
