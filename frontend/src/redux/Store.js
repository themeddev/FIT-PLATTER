import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/authSlice'
import cartReducer from './CartSlice';
import elemCartReducer from './ElemCartSlice'; 

export const store = configureStore({
  reducer: {
    auth: authSlice,
    Cart: cartReducer,
    ElemMenu: elemCartReducer, 
  }
});
