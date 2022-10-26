import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4.875rem;
  position: absolute;
  top: 10.625rem;
  left: -1px;
`;

export const Header = styled.h1(
  ({ theme: { fontSize, colors }}) => css`
    margin: 0;
    font-size: ${fontSize.lg};
    line-height: 4.2rem;
    color: ${colors.blackBlue};
  `
);

export const GradientLine = styled.span(
  ({ theme: { colors }}) => css`
    height: 7.5rem;
    width: 0.313rem;
    background: linear-gradient(${colors.blue}, ${colors.pink});
  `
);
