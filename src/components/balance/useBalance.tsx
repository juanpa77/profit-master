/* eslint-disable react-hooks/exhaustive-deps */
import { startOfWeek } from "date-fns";
import { useState, useEffect } from "react";
import { Transaction } from "../../global";
import { getTransactions, Transactions } from "../../services/pouchDb";
import { formatDate, formatNumberMonth, isDayInCurrentWeek, splitDate } from "../../utility/formatData";
import { calcAvailableForWeek } from "./services/calcAmount";

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

  const filterTransactionPerDay = (transactions: Transaction[]) => {
    return transactions.filter(transaction => splitDate(transaction.date).day === currentDate.day)
  }

  const filterTransactionPerWeek = (transactions: Transaction[]) => {
    return transactions.filter(transaction => isDayInCurrentWeek(transaction.date))
  }

  const calcTotalAmount = (transactions: Transaction[]) => {
    return transactions.reduce((accumulator, transaction) => accumulator + transaction.amount, 0)
  }

  const getTotalAmount = (transactions: Transaction[], timeFrame: TimeFrame) => {
    const calc = {
      days: () => calcTotalAmount(filterTransactionPerDay(transactions)),
      weeks: () => calcTotalAmount(filterTransactionPerWeek(transactions)),
      months: calcTotalAmount(transactions)
    }
    return calc[timeFrame]
  }

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