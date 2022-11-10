import { Balance } from "../../components/balance"

type Props = {
  locale: string | undefined
}

const AccountSummary = ({ locale }: Props) => {

  return (
    <>
      {/* <Balance locale={locale} timeFrame='days' /> */}
      <Balance locale={locale} timeFrame='months' />
      <Balance locale={locale} timeFrame='weeks' />
      <Balance locale={locale} timeFrame='days' />
    </>
  )
}

export default AccountSummary