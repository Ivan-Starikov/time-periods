import styled, { css } from 'styled-components';

export const YearsWrapper = styled.div(
  ({ theme: { colors, fontSize }}) => css`
    display: flex;
    justify-content: center;
    gap: 5rem;
    position: absolute;
    left: 14rem;
    top: 25rem;
    font-size: ${fontSize.xl};
    font-weight: 700;

    @media (max-width: 52.5rem) {
      left: 9rem;
      font-size: ${fontSize.lg};
    };

    @media (max-width: 39rem) {
      left: 5rem;
      top: 15rem;
      gap: 3rem;
    };

    @media (max-width: 30rem) {
      left: 1rem;
      top: 10rem;
      gap: 1rem;
    };
  `,
);

export const StartYear = styled.span(
  ({ theme: { colors }}) => css`
    color: ${colors.iris};
  `
);

export const EndYear = styled.span(
  ({ theme: { colors }}) => css`
    color: ${colors.pink};
  `
);
