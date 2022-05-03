import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../layout/Layout';

import Auth from '../pages/Auth';
import HomePage from '../pages/HomePage';

const BasicRoutes = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default BasicRoutes;
