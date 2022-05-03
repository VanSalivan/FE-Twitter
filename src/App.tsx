import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BasicRoutes from './routes/BasicRoutes';

const App = () => (
  <BrowserRouter >
    <BasicRoutes />
  </BrowserRouter>
);

export default App;
