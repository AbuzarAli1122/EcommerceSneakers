import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user_slice.js";


export const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

