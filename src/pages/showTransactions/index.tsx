
import { es } from 'date-fns/locale'
import { useRouter } from 'next/router'
import React from 'react'
import Toggle from '../../components/btn/Toggle'
import Filters from '../../components/filters'
import TransactionList from '../../components/transactionList'
import en from '../../public/locale/en'
import { Wrapper } from './styled'

const ShowTransactions = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  return (
    <Wrapper>
      <Filters locale={locale} />
      <Toggle locale={locale} />
      <TransactionList />
    </Wrapper>
  )
}

export default ShowTransactions
