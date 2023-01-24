import { questionsSlice } from './questionsSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    [questionsSlice.reducerPath]: questionsSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(questionsSlice.middleware)
})