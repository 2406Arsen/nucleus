import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMainInitialState {
  themeMode: 'dark' | 'light';
}
const initialState: IMainInitialState = {
  themeMode: 'dark',
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeThemeMode: (state, { payload }: PayloadAction<'dark' | 'light'>) => {
      state.themeMode = payload
    },
  },
})

export const { changeThemeMode } = mainSlice.actions
export default mainSlice.reducer
