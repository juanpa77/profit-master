import { useState } from "react";
import { setType } from "../../../redux/filters/filterSlice";
import { useAppDispatch } from "../../../redux/useApp";

export type TransactionType = {
  expenses: string
  income: string
}

const useToggle = () => {
  const [transactionType, setTransactionType] = useState<keyof TransactionType>('expenses')
  const dispatch = useAppDispatch()
  const handleToggle = (valueType: keyof TransactionType) => {
    setTransactionType(valueType)
    dispatch(setType(valueType))
  }
  return { handleToggle, transactionType }
}
export default useToggle 