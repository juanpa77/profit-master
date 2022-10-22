import { useRouter } from "next/router"
import { Balance } from "../../components/balance"
import en from '../../public/locale/en'
import es from '../../public/locale/en'

const Home = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return (
    <>
      <Balance locale={locale} />
    </>
  )
}

export default Home