import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 3.5rem;
  padding: 0 1rem;
`;

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
`;

export const PanelWrapper = styled.div`
  position: absolute;
  bottom: -2.5rem;
  left: -3rem;
`;

export const Year = styled.span(
  ({ theme: { colors, fontSize }}) => css`
    margin-bottom: 1rem;
    color: ${colors.iris};
    font-family: Bebas Neue, sans-serif;
    font-size: ${fontSize.md};
    @media (max-width: 30rem) {
      font-size: ${fontSize.xs};
    }
  `,
);

export const Event = styled.span(
  ({ theme: { fontSize }}) => css`
    line-height: 1.875rem;
    @media (max-width: 30rem) {
      font-size: ${fontSize.xxs};
    }
  `,
);

