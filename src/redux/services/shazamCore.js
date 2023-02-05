import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '15421ba11cmshf5ca5bf7e389b3dp1799f1jsn52c88414e715'),
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com')

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' })
    })
    
})

export const {
    useGetTopChartsQuery
} = shazamApi