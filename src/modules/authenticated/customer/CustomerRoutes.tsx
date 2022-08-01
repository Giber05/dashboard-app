import React from 'react';
import { Routes, Route } from 'react-router';
import asyncComponent from '../../../core/common_components/AsyncComponent';
import NotFound from '../../../core/common_components/NotFound';

function CustomerRoutes() {
  return<Routes>
  <Route index element={asyncComponent(() => import("./presentation/features/show_customers/ShowCustomersPage"))} />
  <Route path="add-customer" element={asyncComponent(() => import("./presentation/features/add_customer/AddCustomerPage"))} />
  <Route path="edit-customer" element={asyncComponent(() => import("./presentation/features/edit_customer/EditCustomerPage"))} />
  <Route path="*" element={<NotFound />} />
</Routes>;
}

export default CustomerRoutes;
