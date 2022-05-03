import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../pages/Auth';
import Home from '../pages/Home';

const TwitterRoutes = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/home">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default TwitterRoutes;
