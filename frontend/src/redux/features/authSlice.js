import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, updateUser, getUserData } from "./authAction";

// Initial state with more detailed structure
const initialState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
            state.success = false;
        },
        resetState(state) {
            state.loading = false;
            state.userInfo = null;
            state.userToken = null;
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle login actions
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                state.userToken = payload.token;
                state.userInfo = payload.user;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.success = false;
                state.error = payload || 'Failed to login';
            })
            // Handle registration actions
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                state.userInfo = payload.user;
                state.userToken = payload.token;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.success = false;
                state.error = payload || 'Failed to register';
            })
            // Handle update user actions
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                state.userInfo = payload.customer; // Assuming the payload contains the updated customer data
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.success = false;
                state.error = payload || 'Failed to update user info';
            })
            // Handle get user data actions
            .addCase(getUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(getUserData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                state.userInfo = payload; // Assuming the payload contains the user data
            })
            .addCase(getUserData.rejected, (state, { payload }) => {
                state.loading = false;
                state.success = false;
                state.error = payload || 'Failed to fetch user data';
            });
    },
});

export const { logout, resetState } = authSlice.actions;

export default authSlice.reducer;
