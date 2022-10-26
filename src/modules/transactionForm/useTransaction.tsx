import { nanoid } from "nanoid"
import { ChangeEvent, useState } from "react"
import { Transaction } from "../../global"
import { addTransaction } from "../../services/pouchDb"
import { formatDate } from "../../utility/formatData"

type InputChange = ChangeEvent<
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLTextAreaElement
  | HTMLSelectElement
>

const useTransaction = () => {
  const [transaction, setTransaction] = useState<Transaction>({
    id: nanoid(10),
    type: 'expense',
    amount: 0,
    date: formatDate(new Date()),
    category: '',
    description: ''
  })

  // console.log(transaction)

  const handleInputChange = (e: InputChange) => {
    setTransaction({
      ...transaction,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const sendTransaction = () => {
    if (transaction.amount > 0) {
      addTransaction(transaction)
    }
  }

  return { transaction, handleInputChange, sendTransaction }
}

export default useTransaction