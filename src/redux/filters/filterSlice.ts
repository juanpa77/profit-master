import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TransactionType } from "../../global"
import { FilterDateNames } from "../../modules/filters"

export interface Filters {
  type: TransactionType
  day: number
  week: number
  month: number
  category: string
}

const filters: Filters = {
  type: 'expenses',
  day: new Date().getDate(),
  category: 'all',
  week: 2,
  month: new Date().getMonth() + 1
}
export type FilterPayload = {
  name: FilterDateNames
  value: number
}
export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filters,
  reducers: {
    setDateFilter: (state, action: PayloadAction<FilterPayload>) => {
      state[action.payload.name] = action.payload.value
    },
    setType: (state, action: PayloadAction<TransactionType>) => {
      state.type = action.payload
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
  }
})

export const { setCategory, setType, setDateFilter } = filtersSlice.actions
export default filtersSlice.reducer