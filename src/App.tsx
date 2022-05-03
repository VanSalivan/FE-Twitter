import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import TwitterRoutes from './routes/TwitterRoutes';

const App = () => (
  <BrowserRouter >
    <TwitterRoutes />
  </BrowserRouter>
);

export default App;
