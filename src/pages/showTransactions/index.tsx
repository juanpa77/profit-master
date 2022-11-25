
import { es } from 'date-fns/locale'
import en from '../../public/locale/en'
import { useRouter } from 'next/router'
import { Wrapper } from './styled'
import Toggle from '../../components/btn/Toggle'
import DateFilters from '../../modules/filters/index'
import TransactionList from '../../components/transactionList'

const ShowTransactions = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  return (
    <Wrapper>
      <Toggle locale={locale} />
      <DateFilters locale={locale} />
      <TransactionList />
    </Wrapper>
  )
}

export default ShowTransactions
