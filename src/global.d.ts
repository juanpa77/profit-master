
interface Transaction {
  id: string
  type: string
  amount: number
  date: string
  category: string
  description: string
}

export interface Filters {
  type: string
  week: string
  month: string
  category: string
}
