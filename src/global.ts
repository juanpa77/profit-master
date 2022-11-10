
export type TransactionType = 'expenses' | 'income'
export interface Transaction {
  id: string
  type: string
  amount: number
  date: string
  category: string
  description: string
  week: number
}

export interface Filters {
  type: TransactionType
  week: string
  month: string
  category: string
}
