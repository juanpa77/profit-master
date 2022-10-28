
export type TransactionType = 'expenses' | 'income'
export interface Transaction {
  id: string
  type: string
  amount: number
  date: string
  category: string
  description: string
}

export type Filters = {
  type: string
  week: string
  month: string
  category: string
}
