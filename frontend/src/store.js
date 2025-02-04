import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlices";

const store = configureStore({
    reducer: {
        // Add your reducers here
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;