import { configureStore } from '@reduxjs/toolkit'
import videoSlice from './features/videos/VideoSlice';
import searchedVideoSlice from './features/videos/searchedVideoSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      videoSlice,
      searchedVideos: searchedVideoSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
