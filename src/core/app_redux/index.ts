import { configureStore } from "@reduxjs/toolkit";
import customerActionSlice from "../../modules/authenticated/customer/presentation/reducers/customer_action_slice";
import  customersSlice  from "../../modules/authenticated/customer/presentation/reducers/show_customes_slice";
import authSlice  from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import middleware from "./middleware";
import commonSlice from "./reducers/common_reducer";

const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
    customer:customersSlice,
    customerActions:customerActionSlice,
  },
  middleware,
});

export default store;
