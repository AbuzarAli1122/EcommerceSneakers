import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user_slice.js";



const store = configureStore({
    reducer: {
        data: userSlice,
    }
});

export default store;