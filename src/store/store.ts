import { configureStore } from '@reduxjs/toolkit'
import MainSlice from './features/Main/MainSlice'
const store = configureStore({
  reducer: {
    main: MainSlice,
  },
})

export default store

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch