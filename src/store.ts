import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user/userSlice'
import transactionsReducer from './redux/transactions/transactionsSlice';
import { createWrapper } from "next-redux-wrapper";
import { createEpicMiddleware } from 'redux-observable';
import { getTransactionsEpic } from './epic';

const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionsReducer
})
export type MyState = ReturnType<typeof rootReducer>

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, MyState>()

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return [
      ...getDefaultMiddleware({ thunk: true, serializableCheck: true }),
      epicMiddleware
    ]
  },
  devTools: true,
})

const makeStore = () => store
epicMiddleware.run(getTransactionsEpic)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(makeStore)
export default store