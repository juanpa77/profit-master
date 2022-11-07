/* eslint-disable react-hooks/exhaustive-deps */
import { startOfWeek } from "date-fns"
import { useEffect, useState } from "react"
import { Transaction } from "../../global"
import { getTransactions } from "../../services/pouchDb"
import { formatNumberMonth } from "../../utility/formatData"

const useTransactionList = () => {
  const currentMonth = formatNumberMonth(startOfWeek(new Date(), { weekStartsOn: 1 }).getMonth())

  const [load, setLoad] = useState(true)
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([])

  useEffect(() => {
    let isActive = true
    getTransactions(currentMonth)
      .then(transactions => setTransactionsList(transactions.expenses))

    setLoad(false)
    return () => {
      isActive = false
    }
  }, [])


  return transactionsList
}

export default useTransactionList