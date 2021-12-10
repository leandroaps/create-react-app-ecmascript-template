import { ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';

import LOADING from './molecules/Loading';
import ROUTER from './router/Router';
import { StoreProvider } from './store';
import THEME from './theme';

export default function FOOTER() {
  return (
    <StoreProvider>
      <ThemeProvider theme={THEME}>
        <Suspense fallback={<LOADING />}>
          <ROUTER />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
}
