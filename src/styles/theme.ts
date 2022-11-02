import { DefaultTheme } from 'styled-components';

export enum FontSizes {
  xxs = '0.875rem',
  xs = '1rem',
  sm = '1.25rem',
  md = '1.563rem',
  lg = '3.5rem',
  xl = '12.5rem',
};

export enum Colors {
  white ='#e5e5e5',
  blue = '#3877ee',
  blackBlue = '#42567a',
  iris = '#5d5fef',
  pink = '#ef5da8',
  blackBlue2 = ' #bdc7db',
};

const theme: DefaultTheme = {
  colors: Colors,
  fontSize: FontSizes,
};

export default theme;
