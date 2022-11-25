import { useEffect, useState } from "react"
import { Transaction } from "../../global"
import { useAppSelector } from "../../redux/useApp"

const useTransactionList = () => {
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([])
  const transactionSelector = useAppSelector(state => state.transactions)

  useEffect(() => {
    setTransactionsList(transactionSelector.filteredTransactions)
  }, [transactionSelector, transactionSelector.filteredTransactions])

  return transactionsList
}

export default useTransactionList