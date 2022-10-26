import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

import Main from './Main';

const root = document.getElementById('root');
const app = createRoot(root!);

app.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </>
);
