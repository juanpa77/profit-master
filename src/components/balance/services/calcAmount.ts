import { getWeeksInMonth } from "date-fns"
import { Transaction } from "../../../global"
import { TimeFrame } from "../useBalance"
import { filterTransactionPerDay, filterTransactionPerWeek } from "./filtersTransactions"

export const calcAvailableForWeek = (totalIncomeMonth: number, totalExpensesMonth: number) => {
  const totalWeeksOfMonth = getWeeksInMonth(new Date(), { weekStartsOn: 1 })
  return (totalIncomeMonth - totalExpensesMonth) / totalWeeksOfMonth
}

export const calcAvailableForCurrentWeek = (totalIncomeMonth: number, totalExpensesMonth: number, currentExpenses: number) => {
  const totalWeeksOfMonth = getWeeksInMonth(new Date(), { weekStartsOn: 1 })
  return ((totalIncomeMonth - totalExpensesMonth) / totalWeeksOfMonth) - currentExpenses
}

export const calcTotalAmount = (transactions: Transaction[]) => {
  return transactions.reduce((accumulator, transaction) => accumulator + transaction.amount, 0)
}

export const getTotalAmount = (transactions: Transaction[], timeFrame: TimeFrame) => {
  const calc = {
    days: () => calcTotalAmount(filterTransactionPerDay(transactions)),
    weeks: () => calcTotalAmount(filterTransactionPerWeek(transactions)),
    months: calcTotalAmount(transactions)
  }
  return calc[timeFrame]
}