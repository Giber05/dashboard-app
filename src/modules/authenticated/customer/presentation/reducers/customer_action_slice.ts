import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import { CustomerModel } from "../../data/models/customer_model";

type CustomerActionState = {
  isActionLoading: boolean;
  isActionModalVisible: boolean;
  customer:CustomerModel|null;
};

const initialState: CustomerActionState = {
  isActionLoading: false,
  isActionModalVisible: false,
  customer:null,
};

export const customerActionSlice = createSlice({
  name: "customer_actions",
  initialState,
  reducers: {
    setIsActionLoading: (state, action: PayloadAction<boolean>) => {
      state.isActionLoading = action.payload;
    },
    setIsActionModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isActionModalVisible = action.payload;
    },
    setCustomer: (state, action: PayloadAction<CustomerModel>) => {
      state.customer = action.payload;
    },
  },
});

export const { setIsActionLoading, setIsActionModalVisible,setCustomer } = customerActionSlice.actions;

export const selectCustomerAction = (state: RootState): CustomerActionState => state.customerActions;

export default customerActionSlice.reducer;
