import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";

const initialState = {
    loading: false,
    userInfo : {},
    userToken : {},
    error : null,
    success : false
}


const authSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
        // login User
            .addCase(loginUser.pending, (state)=>{
                state.loading = true
                state.error = null
                state.success = false
            })
            .addCase(loginUser.fulfilled, (state, { payload })=>{
                state.loading = false
                state.success = true
                state.userToken = payload.token
            })
            .addCase(loginUser.rejected, (state, { payload })=>{
                state.loading = false
                state.success = false
                state.error = payload
            })
        // register User ------------
            .addCase(registerUser.pending, (state)=>{
                state.loading = true
                state.error = null  
                state.success = false
            })
            .addCase(registerUser.fulfilled, (state, { payload })=>{
                state.loading = false
                state.success = true
                state.userInfo = payload.customer
                state.userToken = payload.token
            })
            .addCase(registerUser.rejected, (state, { payload })=>{
                state.loading = false;
                state.success = false
                state.error = payload
            })
    }
})

export default authSlice.reducer;