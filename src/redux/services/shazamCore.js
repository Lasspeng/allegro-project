import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Request top 200 world chart from Shazam Core API

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RAPIDAPI-KEY', 'b4c34d1e8amsh9459cd83e871bc3p1ab187jsne6a6f02e09aa');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
