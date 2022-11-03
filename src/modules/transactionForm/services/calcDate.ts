import { getWeekOfMonth, startOfWeek } from "date-fns"

export const calcWeekOfMonth = (date: Date) => {
  const weekOfMonth = getWeekOfMonth(date, { weekStartsOn: 1 })
  const isFirstWeekOfWeek = weekOfMonth === 1
  const isFirstDayOfWeekOnCurrentMonth = startOfWeek(date, { weekStartsOn: 1 }).getMonth() === date.getMonth()
  if (isFirstWeekOfWeek) {
    return isFirstDayOfWeekOnCurrentMonth
      ? weekOfMonth
      : 0
  }
  return weekOfMonth - 1
}