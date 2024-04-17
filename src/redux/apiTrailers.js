import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const apiTrailers = createApi({
  reducerPath: 'trailers',
  baseQuery: axios.create(),
  endpoints:(build)=> ({
    getTrailersRequest: build.query({
      providesTags: [{type: 'campers', id: 'LIST'}],
      query:(arg)=> 'https://661bff7be7b95ad7fa697c99.mockapi.io/campers'
    })
  })
})

export const {
  useGetTrailersRequestQuery,
}= apiTrailers