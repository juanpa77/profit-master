import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user/userSlice'
import transactionsReducer from './redux/transactions/transactionsSlice';
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionsReducer
})

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

const makeStore = () => store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(makeStore)
export default store