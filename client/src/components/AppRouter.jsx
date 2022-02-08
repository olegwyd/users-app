import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authRoutes, publickhRoutes } from '../routes.js';

const AppRouter = () => {
  const isAuth = useSelector(({ isAuthReducer }) => isAuthReducer.isAuth);

  return (
    <>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, Component }) => {
            return (
              <Route key={path} path={path} element={<Component />} exact />
            );
          })}

        {publickhRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />;
        })}
      </Routes>
    </>
  );
};

export default AppRouter;
