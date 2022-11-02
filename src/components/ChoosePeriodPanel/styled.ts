import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.25rem;
  position: absolute;
  bottom: 15rem;
  left: 5rem;
  @media (max-width: 52.5rem) {
   bottom: 2rem;
  };
`
export const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 1.25rem;
`
export const Number = styled.div(
  ({ theme: { fontSize } }) => css`
    font-size: ${fontSize.xxs};
  `,
);
