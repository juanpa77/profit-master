import Toggle from "../../components/btn/Toggle"

type Props = {
  locale: string | undefined
}

const TransactionForm = ({ locale }: Props) => {

  return (
    <Toggle locale={locale}></Toggle>
  )
}

export default TransactionForm