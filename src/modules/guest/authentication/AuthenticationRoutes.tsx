import React from 'react';
import { Routes, Route } from 'react-router';
import asyncComponent from '../../../core/common_components/AsyncComponent';
import NotFound from '../../../core/common_components/NotFound';

function AuthenticationRoutes() {
  return <Routes>
  <Route path="login" element={asyncComponent(() => import("./presentation/features/login/LoginPage"))} />
  <Route path="*" element={<NotFound />} />
</Routes>;
}

export default AuthenticationRoutes;
