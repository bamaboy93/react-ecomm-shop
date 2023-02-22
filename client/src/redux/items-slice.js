import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "items",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `/items?populate=image`,
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;