import { startOfWeek, add, isWithinInterval, weeksToDays } from "date-fns"
import { Transaction } from "../../global"
import { formatDate, formatStringToDate, splitDate } from "../../utility/formatData"

const currentDate = splitDate(formatDate(new Date()))
export const filterTransactionPerDay = (transactions: Transaction[]) => {
  return transactions.filter(transaction => splitDate(transaction.date).day === currentDate.day)
}

export const filterTransactionPerWeek = (transactions: Transaction[], weekNumber?: number) => {
  if (weekNumber) {
    const formatWeekNumber = weekNumber - 1
    return transactions.filter(transactions => {
      // console.log(transactions.week === formatWeekNumber)
      return transactions.week === formatWeekNumber
    })
  }
  return transactions.filter(transaction => isDayInCurrentWeek(transaction.date))
}

export const isDayInCurrentWeek = (date: string | Date) => {
  const formatDate = typeof date === 'string' ? formatStringToDate(date) : date
  const startDay = startOfWeek(new Date(), { weekStartsOn: 1 })
  const interval = {
    start: startDay,
    end: add(startDay, { days: 6 })
  }
  return isWithinInterval(formatDate, interval)
}