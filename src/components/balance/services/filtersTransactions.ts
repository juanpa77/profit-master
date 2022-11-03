import { Transaction } from "../../../global"
import { formatDate, isDayInCurrentWeek, splitDate } from "../../../utility/formatData"

const currentDate = splitDate(formatDate(new Date()))
export const filterTransactionPerDay = (transactions: Transaction[]) => {
  return transactions.filter(transaction => splitDate(transaction.date).day === currentDate.day)
}

export const filterTransactionPerWeek = (transactions: Transaction[]) => {
  return transactions.filter(transaction => isDayInCurrentWeek(transaction.date))
}