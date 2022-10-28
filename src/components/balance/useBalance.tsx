import { useState, useEffect } from "react";
import { Transaction } from "../../global";
import { getTransactions, Transactions } from "../../services/pouchDb";
import { formatNumberMonth } from "../../utility/formatData";

export type TimeFrame = 'days' | 'months' | 'weeks'

const useBalance = (timeFrame: TimeFrame) => {
  const currentMonth = formatNumberMonth(new Date().getMonth())
  const [allTransactions, setAllTransactions] = useState<Transactions>()
  const [totalIncomeMonth, setTotalIncomeMonth] = useState(0);
  const [totalExpensesMonth, setTotalExpensesMonth] = useState(0);
  const [available, setAvailable] = useState(0)

  const calcTotalAmount = (transactions: Transaction[]) => {
    return transactions.reduce((totalIncome, currentIncome) => totalIncome + currentIncome.amount, 0)
  }

  const calcAvailable = (timeFrame: TimeFrame) => {
    if (timeFrame === "months") return setAvailable(totalIncomeMonth - totalExpensesMonth)
  }

  useEffect(() => {
    getTransactions(currentMonth)
      .then(transactions => setAllTransactions(transactions))
  }, [])

  useEffect(() => {
    allTransactions && setTotalIncomeMonth(calcTotalAmount(allTransactions.income))
    allTransactions && setTotalExpensesMonth(calcTotalAmount(allTransactions.expenses))
    calcAvailable(timeFrame)
    console.log(currentMonth)
  }, [allTransactions]
  )

  return { available, totalIncomeMonth, totalExpensesMonth }
}

export default useBalance