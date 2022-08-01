import "./core/styles/css/antd.css";
import "./core/styles/global.css";
import { Provider as StoreProvider } from "react-redux";
import AppRedux from "./core/app_redux";
import AppRoutes from "./core/app_router";
import AuthProvider from "./modules/guest/authentication/presentation/AuthProvider";

function App() {
  return (
    <StoreProvider store={AppRedux}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
