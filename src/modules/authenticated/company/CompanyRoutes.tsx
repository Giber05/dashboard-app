import React from 'react';
import { Routes, Route } from 'react-router';
import asyncComponent from '../../../core/common_components/AsyncComponent';
import NotFound from '../../../core/common_components/NotFound';

function CompanyRoutes() {
  return<Routes>
  <Route index element={asyncComponent(() => import("./presentation/features/company_profile/CompanyProfilePage"))} />
  <Route path="*" element={<NotFound />} />
</Routes>;
}

export default CompanyRoutes;
