/* eslint-disable react-hooks/exhaustive-deps */
import { startOfWeek } from "date-fns";
import { useState, useEffect } from "react";
import { getTransactions, Transactions } from "../../services/pouchDb";
import { formatDate, formatNumberMonth, splitDate } from "../../utility/formatData";
import { calcAvailableForWeek, getTotalAmount } from "./services/calcAmount";

export type TimeFrame = 'days' | 'months' | 'weeks'

const useBalance = (timeFrame: TimeFrame) => {
  const currentMonth = formatNumberMonth(startOfWeek(new Date(), { weekStartsOn: 1 }).getMonth())
  const currentDate = splitDate(formatDate(new Date()))
  const numberOfDaysInMonth = new Date(parseInt(currentDate.year), parseInt(currentDate.month), 0).getDate()
  const [allTransactions, setAllTransactions] = useState<Transactions>()
  const [totalIncomeMonth, setTotalIncomeMonth] = useState(0);
  const [totalExpensesMonth, setTotalExpensesMonth] = useState(0);
  const [available, setAvailable] = useState(0)

  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)

  const calcAvailable = (timeFrame: TimeFrame) => {
    const available = {
      days: () => ((totalIncomeMonth - totalExpensesMonth) / numberOfDaysInMonth),
      weeks: () => calcAvailableForWeek(totalIncome, totalExpenses),
      months: Math.round(totalIncomeMonth - totalExpensesMonth)
    }
    return available[timeFrame]
  }

  useEffect(() => {
    getTransactions(currentMonth)
      .then(transactions => setAllTransactions(transactions))
  }, [])

  useEffect(() => {
    allTransactions && setTotalIncomeMonth(getTotalAmount(allTransactions.income, 'months'))
    allTransactions && setTotalExpensesMonth(getTotalAmount(allTransactions.expenses, 'months'))
    allTransactions && setTotalExpenses(getTotalAmount(allTransactions.expenses, timeFrame))
    allTransactions && setTotalIncome(getTotalAmount(allTransactions.income, timeFrame))
    // allTransactions && console.log(allTransactions)
  }, [allTransactions])

  useEffect(() => {
    setAvailable(calcAvailable(timeFrame))
  }, [totalExpenses, totalIncome])

  return { available, totalIncome, totalExpenses }
}

export default useBalance