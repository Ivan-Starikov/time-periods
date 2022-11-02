import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 10.625rem;
  
  @media (max-width: 39rem) {
    margin-top: 3.75rem;
  }
`;

export const Header = styled.h1(
  ({ theme: { fontSize, colors }}) => css`
    margin: 0 4.5rem;
    font-size: ${fontSize.lg};
    line-height: 4.2rem;
    color: ${colors.blackBlue};

    @media (max-width: 39rem) {
      font-size: ${fontSize.sm};
      margin: 0 1rem;
      line-height: 1.5rem;
    }
  `
);

export const GradientLine = styled.span(
  ({ theme: { colors }}) => css`
    height: 7.5rem;
    width: 0.313rem;
    background: linear-gradient(${colors.blue}, ${colors.pink});
  `
);
