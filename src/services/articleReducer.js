import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => "test",
    }),
  }),
});

export const articleReducer = articleApi.reducer;

// export const [articleApi.reducerPath]: articleApi.reducer;

export const { reducerPath } = articleApi;
