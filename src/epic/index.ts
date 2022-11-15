import { Action } from '@reduxjs/toolkit'
import { ofType } from 'redux-observable'
import { from, mergeMap, Observable } from 'rxjs'
import { map } from "rxjs"
import { getAllTransactionsAction, getAllTransactionsRequest } from '../redux/transactions/transactionsSlice'
import { getTransactions } from "../services/pouchDb"

export const getTransactionsEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(getAllTransactionsRequest),
  mergeMap((action: any) =>
    from(getTransactions(action.payload)).pipe(
      map(response => getAllTransactionsAction(response))
    )
  )
)
