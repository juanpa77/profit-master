import { startOfWeek, getDaysInMonth } from "date-fns";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/useApp";
import { Transactions } from "../../services/pouchDb";
import { calcAvailableForWeek, getTotalAmount } from "./services/calcAmount";

export type TimeFrame = 'days' | 'months' | 'weeks'

const useBalance = (timeFrame: TimeFrame) => {
  const currentDate = startOfWeek(new Date(), { weekStartsOn: 1 })
  const numberOfDaysInMonth = getDaysInMonth(currentDate)

  const [allTransactions, setAllTransactions] = useState<Transactions>()
  const [totalIncomeMonth, setTotalIncomeMonth] = useState(0);
  const [totalExpensesMonth, setTotalExpensesMonth] = useState(0);

  const [currentIncome, setCurrentIncome] = useState(0)
  const [currentExpenses, setCurrentExpenses] = useState(0)
  const [available, setAvailable] = useState(0)

  // const currentMonth = formatNumberMonth(currentDate.getMonth())
  // const dispatch = useAppDispatch()
  const transactions = useAppSelector(state => state.transactions.allTransactions)

  const calcAvailable = (timeFrame: TimeFrame) => {
    const available = {
      days: () => ((totalIncomeMonth - totalExpensesMonth) / numberOfDaysInMonth) - currentExpenses,
      weeks: () => calcAvailableForWeek(totalIncomeMonth, totalExpensesMonth) - currentExpenses,
      months: Math.round(totalIncomeMonth - totalExpensesMonth)
    }
    return available[timeFrame]
  }



  useEffect(() => setAllTransactions(transactions), [transactions])

  useEffect(() => {
    allTransactions && setTotalIncomeMonth(getTotalAmount(allTransactions.income, 'months'))
    allTransactions && setTotalExpensesMonth(getTotalAmount(allTransactions.expenses, 'months'))
    allTransactions && setCurrentExpenses(getTotalAmount(allTransactions.expenses, timeFrame))
    allTransactions && setCurrentIncome(getTotalAmount(allTransactions.income, timeFrame))
  }, [allTransactions])

  useEffect(() => {
    setAvailable(calcAvailable(timeFrame))
  }, [totalExpensesMonth, totalIncomeMonth])

  return { available, currentIncome, currentExpenses }
}

export default useBalance