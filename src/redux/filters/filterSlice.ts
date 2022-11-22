import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TransactionType } from "../../global"
import { formatNumberMonth } from "../../utility/formatData"

export type SetFilter = {
  // name: keyof Filters
  value: typeof filters
}
export interface Filters {
  type: TransactionType
  week: string
  month: string
  category: string
}

const filters: Filters = {
  type: 'expenses',
  category: 'all',
  week: 'all',
  month: formatNumberMonth(new Date().getMonth())
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filters,
  reducers: {
    setType: (state, action: PayloadAction<TransactionType>) => {
      state.type = action.payload
    },
    setWeek: (state, action: PayloadAction<string>) => {
      state.week = action.payload
    },
    setMonth: (state, action: PayloadAction<string>) => {
      state.month = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
  }
})

export const { setCategory, setMonth, setType, setWeek } = filtersSlice.actions
export default filtersSlice.reducer