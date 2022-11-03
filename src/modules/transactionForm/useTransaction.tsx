/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from "nanoid"
import { ChangeEvent, useEffect, useState } from "react"
import { Transaction } from "../../global"
import { addTransaction } from "../../services/pouchDb"
import { sharingFilter } from "../../services/sharing-filter"
import { formatDate, formatStringToDate } from "../../utility/formatData"
import { calcWeekOfMonth } from "./services/calcDate"

type InputChange = ChangeEvent<
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLTextAreaElement
  | HTMLSelectElement
>

const useTransaction = () => {
  const [transaction, setTransaction] = useState<Transaction>({
    id: nanoid(10),
    type: 'expenses',
    amount: 0,
    date: formatDate(new Date()),
    category: '',
    description: '',
    week: calcWeekOfMonth(new Date())
  })
  const subscriptionToggle = sharingFilter.getSubject

  useEffect(() => setTransaction({ ...transaction, week: calcWeekOfMonth(formatStringToDate(transaction.date)) }), [transaction.date])

  useEffect(() => {
    let isActive = true
    subscriptionToggle.subscribe((filters) => {
      if (isActive) {
        setTransaction({
          ...transaction,
          type: filters.type
        })
      }
    })

    return (() => { isActive = false })
  }, [])

  const handleInputChange = (e: InputChange) => {
    setTransaction({
      ...transaction,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const sendTransaction = () => {
    if (transaction.amount > 0) {
      addTransaction(transaction)
      resetTransactionForm()
    }
  }

  const resetTransactionForm = () => {
    setTransaction({
      id: nanoid(10),
      type: 'expenses',
      amount: 0,
      date: formatDate(new Date()),
      category: "",
      description: "",
      week: calcWeekOfMonth(new Date())
    });
  }

  return { transaction, handleInputChange, sendTransaction }
}

export default useTransaction