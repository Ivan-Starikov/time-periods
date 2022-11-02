import styled, { css } from 'styled-components';

type DotProps = {
  angle: number;
};

type NumProps = {
  animated?: boolean;
};

export const Topic = styled.div(
  ({ theme: { fontSize } }) => css`
  position: absolute;
  left: 4.5rem;
  font-size: ${fontSize.sm};
  `,
)

export const ClosedDot = styled.span<DotProps>(
  ({ theme: { colors }, angle }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 0.375rem;
    height: 0.375rem;
    transform: rotate(${angle}deg) translate(16.563rem) rotate(-${angle}deg);
    transition: transform 1s linear;
    background-color: ${colors.blackBlue};
    border: 1px solid ${colors.blackBlue2};
    top: -2px;
    left: -3px;
    border-radius: 100%;
    cursor: pointer;
  `,
);

export const OpenedDot = styled.span<DotProps>(
  ({ theme: { colors }, angle }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${colors.white};
    transform: rotate(${angle}deg) translate(16.563rem) rotate(-${angle}deg);
    transition: transform 1s linear;
    border: 1px solid ${colors.blackBlue2};
    border-radius: 100%;
    width: 3.5rem;
    height: 3.5rem;
    top: -1.5rem;
    left: -1.5rem;
    cursor: pointer;
  `,
);

export const Number = styled.span<NumProps>(
  ({ animated }) => css`
      opacity: ${animated ? 0 : 1};
  `,
);
