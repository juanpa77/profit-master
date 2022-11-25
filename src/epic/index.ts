import { PayloadAction } from '@reduxjs/toolkit'
import { Epic, ofType, StateObservable } from 'redux-observable'
import { concatMap, from, mergeMap, Observable, of } from 'rxjs'
import { map } from "rxjs"
import { TransactionType } from '../global'
import { getAllTransactionsAction, getAllTransactionsRequest, setFilteredTransactions } from '../redux/transactions/transactionsSlice'
import { setType, setDateFilter, FilterPayload } from '../redux/filters/filterSlice'
import { getTransactions } from "../services/pouchDb"
import { RootState } from '../store'
import { filterTransactionPerWeek, filterTransactionsByDay } from '../services/filterTransactions/byDate'

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

export const filterTransactionsByDateEpic: Epic = (action$: Observable<PayloadAction<FilterPayload>>, state$: StateObservable<RootState>) => action$.pipe(
  ofType(setDateFilter.type),
  map((action) => {
    const transactions = state$.value.transactions.allTransactions[state$.value.filters.type]
    if (action.payload.name === 'month') return getAllTransactionsRequest(action!.payload.value.toString())
    if (action.payload.name === 'week') return setFilteredTransactions(filterTransactionPerWeek(transactions, action.payload.value))
    if (action.payload.name === 'day') return setFilteredTransactions(filterTransactionsByDay(transactions, action.payload.value))
  })
)

export const setFilterEpic: Epic = (action$: Observable<PayloadAction<TransactionType>>, state$: StateObservable<RootState>) => action$.pipe(
  ofType(setType.type),
  map((action) => setFilteredTransactions(state$.value.transactions.allTransactions[action.payload]))
)