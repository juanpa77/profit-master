import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTransactions } from "../../services/pouchDb";
import { transactionsState } from "./types";

const transactions: transactionsState = {
  loading: false,
  data: {
    expenses: [],
    income: []
  },
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
    // getAllTransactions: (state, action: PayloadAction<Transactions>) => {
    //   state.expenses = action.payload.expenses
    //   state.income = action.payload.income
    // }
  },
  extraReducers(builder) {
    builder.addCase(fetchTransactions.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.loading = false
      state.data = state.data
      state.error = action.error.message!
    })
  },
})

// export const { getAllTransactions } = transactionsSlice.actions

export default transactionsSlice.reducer