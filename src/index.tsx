import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import App from './App';

import { theme } from './styles/theme';
import './styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('react-root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
