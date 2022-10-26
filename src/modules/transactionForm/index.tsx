import { Submit } from "../../components/btn/Submit/styled"
import Toggle from "../../components/btn/Toggle"
import { SelectList } from "../../components/select"
import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { formatDate } from "../../utility/formatData"
import { AmountInput, DateInput, Description } from "./styled"
import useTransaction from "./useTransaction"

type Props = {
  locale: string | undefined
}

const TransactionForm = ({ locale }: Props) => {
  const { transaction, handleInputChange } = useTransaction()
  const t = locale === 'en' ? en : es

  return (
    <>
      <Toggle locale={locale}></Toggle>
      <AmountInput
        autoFocus={true}
        type="number"
        placeholder="$999"
        onChange={(e) => handleInputChange(e)}
        name="amount"
        aria-label="amount"
      />
      <DateInput
        type="date"
        defaultValue={transaction.date || formatDate(new Date())}
        onChange={(e) => handleInputChange(e)}
        name="date"
        aria-label="date"
      />
      <SelectList
        categories={['s/n', 'test', 'testTwo']}
        handleInputChange={(e) => handleInputChange(e)}
        defaultCategory='s/n'
      />
      <Description
        placeholder={t.enterADescription}
        onChange={(e) => handleInputChange(e)}
        name="description"
        aria-label="description"
      />
      <Submit
        aria-label="submit button">
        {t.send}
      </Submit>
    </>
  )
}

export default TransactionForm