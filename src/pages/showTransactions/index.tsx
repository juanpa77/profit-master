
import { es } from 'date-fns/locale'
import { useRouter } from 'next/router'
import React from 'react'
import Toggle from '../../components/btn/Toggle'
import Filters from '../../components/filters'
import TransactionList from '../../components/transactionList'
import en from '../../public/locale/en'

const ShowTransactions = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  return (
    <>
      <Filters locale={locale} />
      <Toggle locale={locale} />
      <TransactionList />
    </>
  )
}

export default ShowTransactions
