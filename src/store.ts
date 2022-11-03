import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user/userSlice'
import { createWrapper } from "next-redux-wrapper";

// initial states here
const initalState = {}

const store = configureStore({
  reducer: {
    user: userReducer,
    // categoryReducer
  },
  devTools: true
})

const makeStore = () => store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(makeStore)
export default store