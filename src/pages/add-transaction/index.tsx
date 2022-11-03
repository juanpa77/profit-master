import { useRouter } from "next/router"
import TransactionForm from "../../modules/transactionForm"

const AddTransaction = () => {
  const locale = useRouter().locale

  return (
    <TransactionForm locale={locale}></TransactionForm>
  )
}

export default AddTransaction