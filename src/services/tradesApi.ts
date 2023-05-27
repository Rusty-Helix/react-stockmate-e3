
import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
// import {useGet} from 'react'

export const tradesApi = createApi({
    reducerPath: 'tradesApi',
    keepUnusedDataFor: 3600,
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/'}),
    endpoints: (builder) => ({
        getTrades: builder.query<any[], void>({
            query: () => 'trades'
        })
    })

})

// export {useGet} = tradesApi;
export const { useGetTradesQuery } = tradesApi