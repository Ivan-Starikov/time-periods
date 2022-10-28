import styled, { css } from 'styled-components';

type Props = {
  disabled: boolean;
  flipped: boolean;
};

export const Wrapper = styled.div<Props>(
  ({ disabled, flipped }) => css`
    display: flex;
    opacity: ${disabled && '0.5'};
    pointer-events: ${disabled && 'none'};
    transform: ${flipped && 'rotate(180deg)'};
    cursor: pointer;
  `
)
