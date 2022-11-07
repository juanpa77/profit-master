
import { es } from 'date-fns/locale'
import { useRouter } from 'next/router'
import React from 'react'
import Toggle from '../../components/btn/Toggle'
import TransactionList from '../../components/transactionList'
import en from '../../public/locale/en'

const ShowTransactions = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  return (
    <>
      <Toggle locale={locale} />
      <TransactionList />
    </>
  )
}

export default ShowTransactions
