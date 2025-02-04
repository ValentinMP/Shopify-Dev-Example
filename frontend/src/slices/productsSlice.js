import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlices";

export const productsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => PRODUCTS_URL,
            keepUnusedDataFor: 5,
        }),
        getProductDetails: builder.query({
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsSlice;
