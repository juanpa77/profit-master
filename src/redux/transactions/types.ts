export interface Transaction {
  id: string
  type: string
  amount: number
  date: string
  category: string
  description: string
  week: number
}

export interface Transactions {
  expenses: Transaction[]
  income: Transaction[]
}

export type transactionsState = {
  loading: boolean
  allTransactions: Transactions
  filteredTransactions: Transaction[]
  error: string
}