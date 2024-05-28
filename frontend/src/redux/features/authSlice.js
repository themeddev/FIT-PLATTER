import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";

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
            });
    },
});

export const { logout, resetState } = authSlice.actions;

export default authSlice.reducer;
