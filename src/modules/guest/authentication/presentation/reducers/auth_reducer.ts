import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import { UserModel } from "../../data/models/user_model";

type AuthState = {
  isLoadingUser: boolean;
  authUser: UserModel | null;
};

const initialState: AuthState = {
  isLoadingUser: true,
  authUser: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingUser = action.payload;
    },
    setLoggedInUser: (state, action: PayloadAction<UserModel>) => {
      state.authUser = action.payload;
    },
    setLoggedOutUser: (state) => {
      state.authUser = null;
    },
    
  },
});

export const { isAuthLoading, setLoggedInUser, setLoggedOutUser,  } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => state.auth;

export default authSlice.reducer;
