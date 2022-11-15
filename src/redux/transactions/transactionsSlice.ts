import { Action, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTransactions } from "../../services/pouchDb";
import { Transactions, transactionsState } from "./types";

const transactions: transactionsState = {
  loading: false,
  allTransactions: {
    expenses: [],
    income: []
  },
  filteredTransactions: [],
  error: ''
}

export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', (month: string) => {
  return getTransactions(month)
    .then((res => res))
})

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactions,
  reducers: {
    getAllTransactionsRequest: (state, action: PayloadAction<string>) => {
      state.loading = true

    },
    getAllTransactionsAction: (state, action: PayloadAction<Transactions>) => {
      state.allTransactions = action.payload;
      state.loading = false
    }
  },
})

export const { getAllTransactionsAction, getAllTransactionsRequest } = transactionsSlice.actions

export default transactionsSlice.reducer