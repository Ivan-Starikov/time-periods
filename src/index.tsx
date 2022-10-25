import * as ReactDOM from 'react-dom';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </>, document.getElementById('root')
);
