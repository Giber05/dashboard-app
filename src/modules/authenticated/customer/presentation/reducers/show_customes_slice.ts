import { CustomerModel } from "../../data/models/customer_model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
type CustomersState = {
  initLoading: boolean;
  isGetCustomersLoading: boolean;
  isDeleteCustomerLoading: boolean;
  customers: CustomerModel[];

  filterUser:boolean | null | undefined;
  searchText:string|undefined;
};

const initialState: CustomersState = {
  isGetCustomersLoading: false,
  isDeleteCustomerLoading: false,
  initLoading: true,
  customers: [],
 
  filterUser:undefined,
  searchText:undefined,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsGetCustomersLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetCustomersLoading = action.payload;
    },
    setIsDeleteCustomerLoading: (state, action: PayloadAction<boolean>) => {
      state.isDeleteCustomerLoading = action.payload;
    },
    fetchCustomers: (state, action: PayloadAction<CustomerModel[]>) => {
      state.customers = action.payload;
    },
    
    setFilterUser: (state, action: PayloadAction<boolean|null|undefined>) => {
      state.filterUser = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string|undefined>) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  setIsGetCustomersLoading,
  fetchCustomers,
  setInitLoading,
  setFilterUser,
  setSearchText,
  setIsDeleteCustomerLoading
} = customersSlice.actions;

export const selectCustomers = (state: RootState): CustomersState => state.customer;

export default customersSlice.reducer;