import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyModule from "../../modules/authenticated/company/CompanyIndex";
import CustomerModule from "../../modules/authenticated/customer/CustomerIndex";
import DashboardModule from "../../modules/authenticated/dashboard/DasboardIndex";
import AuthenticationModule from "../../modules/guest/authentication/AuthenticationIndex";
import DashboardApp from "../main_app/DashboardApp";

function AppRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="auth/*" element={<AuthenticationModule />} />
        <Route path="/*" element={<DashboardApp />}>
          <Route path="company/*" element={<CompanyModule />} />
          <Route path="dashboard" element={<DashboardModule />} />
          <Route path="customer/*" element={<CustomerModule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
