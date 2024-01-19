import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import { apiSlice } from "../slices/apiSlice";
import modalReducer from "../slices/modalSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;