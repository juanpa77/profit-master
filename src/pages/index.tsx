import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Balance } from '../components/balance'
import AccountSummary from '../modules/accountSummary'
import en from '../public/locale/en'
import es from '../public/locale/es'

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return (
    <AccountSummary locale={locale} />
    // <>
    //   <Balance locale={locale} timeFrame='months' />
    //   <Balance locale={locale} timeFrame='weeks' />
    //   <Balance locale={locale} timeFrame='days' />
    // </>
  )
}

export default Home
