import React from 'react';
import { Routes, Route } from 'react-router';
import asyncComponent from '../../../core/common_components/AsyncComponent';
import NotFound from '../../../core/common_components/NotFound';

function DashboardRoutes() {
  return<Routes>
  <Route index element={asyncComponent(() => import("./presentation/features/dashboard/DashboardPage"))} />
  <Route path="*" element={<NotFound />} />
</Routes>;
}

export default DashboardRoutes;
