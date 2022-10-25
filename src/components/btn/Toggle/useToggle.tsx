import { useState } from "react";
import { sharingFilter } from "../../../services/sharing-filter";

export type TransactionType = {
  expenses: string
  income: string

}

const useToggle = () => {
  const [transactionType, setTransactionType] = useState<keyof TransactionType>('expenses')

  const handleToggle = (valueType: keyof TransactionType) => {
    let isActive = true
    setTransactionType(valueType)
    sharingFilter.getSubject.subscribe(filers => { })
    sharingFilter.setSubject = {
      name: 'type',
      value: valueType
    }
    isActive = false
  }
  return [handleToggle, transactionType] as const
}
export default useToggle 