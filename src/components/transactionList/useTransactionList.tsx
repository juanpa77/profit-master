// /* eslint-disable react-hooks/exhaustive-deps */
import { startOfWeek } from "date-fns"
import { useEffect, useState } from "react"
import { Filters, Transaction } from "../../global"
import { filterTransactionPerWeek } from "../../services/filterTransactions/byDate"
import { getTransactions, Transactions } from "../../services/pouchDb"
import { sharingFilter } from "../../services/sharing-filter"
import { formatNumberMonth } from "../../utility/formatData"

const useTransactionList = () => {
  const currentMonth = formatNumberMonth(startOfWeek(new Date(), { weekStartsOn: 1 }).getMonth())

  const [load, setLoad] = useState(true)
  const [allTransactions, setAllTransactions] = useState<Transactions>({ expenses: [], income: [] })
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([])

  const [filters, setFilters] = useState<Filters>()
  const subscriptionFilters = sharingFilter.getSubject

  // ==> Get all Transactions when component is mounted
  useEffect(() => {
    let isActive = true
    if (isActive) {
      getTransactions(currentMonth)
        .then(transactions => setAllTransactions(transactions))
    }
    setLoad(false)
    // console.log('Get all Transactions when component is mounted')
    return () => {
      isActive = false
    }
  }, [])

  // ==> get filters 
  useEffect(() => {
    sharingFilter.getSubject.subscribe({
      next: (filters) => setFilters(filters)
    })
    // console.log(filters)
  })

  //  ==> Filter for week
  useEffect(() => {
    subscriptionFilters.subscribe(filters => {
      setTransactionsList(
        filterTransactionPerWeek(allTransactions[filters.type], parseInt(filters.week))
      )
    })
    // console.log(filterTransactionPerWeek(allTransactions[filters.type], parseInt(filters.week)))
  }, [filters?.week])

  // ==> Filter for Type when change allTransactions and type filter
  useEffect(() => {
    let isActive = true
    if (isActive) {
      subscriptionFilters.subscribe(filters => {
        allTransactions && setTransactionsList(allTransactions[filters.type])
      })
    }
    setLoad(false)
    return () => { isActive = false }
  }, [filters, allTransactions, subscriptionFilters])

  // ==> get Transactions DB when change month filter And setAllTransactions
  useEffect(() => {
    let isActive = true
    if (isActive) {
      subscriptionFilters.subscribe(filters => {
        getTransactions(filters.month)
          .then(transactions => setAllTransactions(transactions))
      })
    }
    setLoad(false)
    return () => { isActive = false }
  }, [filters?.month])

  return transactionsList
}

export default useTransactionList