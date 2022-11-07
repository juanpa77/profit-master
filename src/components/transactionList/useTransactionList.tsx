/* eslint-disable react-hooks/exhaustive-deps */
import { startOfWeek } from "date-fns"
import { useEffect, useState } from "react"
import { Transaction } from "../../global"
import { getTransactions, Transactions } from "../../services/pouchDb"
import { sharingFilter } from "../../services/sharing-filter"
import { formatNumberMonth } from "../../utility/formatData"

const useTransactionList = () => {
  const currentMonth = formatNumberMonth(startOfWeek(new Date(), { weekStartsOn: 1 }).getMonth())

  const [load, setLoad] = useState(true)
  const [allTransactions, setAllTransactions] = useState<Transactions>()
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([])
  const subscriptionToggle = sharingFilter.getSubject

  useEffect(() => {
    let isActive = true
    subscriptionToggle.subscribe(filters => {
      allTransactions && setTransactionsList(allTransactions[filters.type])
    })

    setLoad(false)
    return () => { isActive = false }
  }, [allTransactions])

  useEffect(() => {
    let isActive = true
    getTransactions(currentMonth)
      .then(transactions => setAllTransactions(transactions))

    setLoad(false)
    return () => {
      isActive = false
    }
  }, [])


  return transactionsList
}

export default useTransactionList