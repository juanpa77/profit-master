import { PayloadAction } from '@reduxjs/toolkit'
import { Epic, ofType, StateObservable } from 'redux-observable'
import { concatMap, from, mergeMap, Observable, of } from 'rxjs'
import { map } from "rxjs"
import { TransactionType } from '../global'
import { getAllTransactionsAction, getAllTransactionsRequest, setFilteredTransactions } from '../redux/transactions/transactionsSlice'
import { SetFilter, Filters, setCategory, setMonth, setType, setWeek } from '../redux/filters/filterSlice'
import { getTransactions } from "../services/pouchDb"
import { RootState } from '../store'

export const getTransactionsEpic: Epic = (action$: Observable<PayloadAction<string>>) => action$.pipe(
  ofType(getAllTransactionsRequest.type),
  mergeMap((action) =>
    from(getTransactions(action.payload)).pipe(
      concatMap(transactions => of(
        getAllTransactionsAction(transactions),
        setFilteredTransactions(transactions.expenses)
      ))
    )
  )
)

export const setFilteredByMonthEpic: Epic = (action$: Observable<PayloadAction<string>>) => action$.pipe(
  ofType(setMonth.type),
  map((action: PayloadAction<string>) => getAllTransactionsRequest(action.payload))
)

export const setFilterEpic: Epic = (action$: Observable<PayloadAction<TransactionType>>, state$: StateObservable<RootState>) => action$.pipe(
  ofType(setType.type),
  map((action) => setFilteredTransactions(state$.value.transactions.allTransactions[action.payload]))
)