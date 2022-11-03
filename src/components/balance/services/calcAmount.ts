import { startOfWeek, startOfMonth, endOfMonth, getWeeksInMonth } from "date-fns"


// calculate whether to divide the month into 4 or 5 weeks depending on the start day of the month
// if the month starts on monday, the days of month are divided into 7 and if the result is greater than 4 the month will be divide in 5 weeks
// if month does not starts on monday, calculate the number of days until left monday and subtract from total days of the month and divide by 7 if result is greater than 4 divide the month into 5 weeks
// if month does not start the monday, the available will by calculate to the last week


const divideMonth = () => {
  const firstDaysOfMonth = startOfMonth(new Date())
  const lastDayOfMonth = endOfMonth(new Date())
  const numberDayOfTheWeek = startOfWeek(firstDaysOfMonth, { weekStartsOn: 1 }).getDay()
  const daysUntilLeftMonday = 7 - numberDayOfTheWeek
  const daysToEndMonth = lastDayOfMonth.getDate() - daysUntilLeftMonday
  const result = Math.ceil(daysToEndMonth / 7)
  return result
}

export const calcAvailableForWeek = (totalIncomeMonth: number, totalExpensesMonth: number) => {
  const totalWeeksOfMonth = getWeeksInMonth(new Date(), { weekStartsOn: 1 })
  return (totalIncomeMonth - totalExpensesMonth) / totalWeeksOfMonth
}

export const calcAvailableForCurrentWeek = (totalIncomeMonth: number, totalExpensesMonth: number, currentExpenses: number) => {
  const totalWeeksOfMonth = getWeeksInMonth(new Date(), { weekStartsOn: 1 })
  return ((totalIncomeMonth - totalExpensesMonth) / totalWeeksOfMonth) - currentExpenses
}