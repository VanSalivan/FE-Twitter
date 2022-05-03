import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import './index.scss';
import { theme } from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
