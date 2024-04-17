import { configureStore } from '@reduxjs/toolkit'
import { apiTrailers } from './redux/apiTrailers';

export const store = configureStore({
  reducer: {
    [apiTrailers.reducerPath]: apiTrailers.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiTrailers.middleware
    ),
})

