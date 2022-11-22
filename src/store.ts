import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user/userSlice'
import transactionsReducer from './redux/transactions/transactionsSlice';
import filterReducer from './redux/filters/filterSlice';
import { createWrapper } from "next-redux-wrapper";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { getTransactionsEpic, setFilteredByMonthEpic, setFilterEpic } from './epic';

const rootReducer = combineReducers({
  user: userReducer,
  transactions: transactionsReducer,
  filters: filterReducer
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

const rootEpic = combineEpics(getTransactionsEpic, setFilteredByMonthEpic, setFilterEpic)
const makeStore = () => store

epicMiddleware.run(rootEpic)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(makeStore)
export default store