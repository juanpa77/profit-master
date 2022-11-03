
export type TransactionType = 'expenses' | 'income'
type dayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface Transaction {
  id: string
  type: string
  amount: number
  date: string
  category: string
  description: string
  week: number
}

export type Filters = {
  type: string
  week: string
  month: string
  category: string
}
