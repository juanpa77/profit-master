import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AccountSummary from '../modules/accountSummary'
// import Config from '../modules/config'
import en from '../public/locale/en'
import es from '../public/locale/es'
import Config from '../public/assets/icons/config.svg'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/useApp'
import { setActiveUser } from '../redux/user/userSlice'
import { auth } from '../services/firebase/authProvider'
import Link from 'next/link'

const Home: NextPage = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  // useEffect(() => { dispatch(getAllTransactionsRequest(currentMonth)) }, [currentMonth, dispatch])
  // useEffect(() => { dispatch(startApp()) }, [dispatch])
  // useEffect(() => { if (user.userToken) router.replace('/') })
  useEffect(() => {
    onAuthStateChanged(auth, (user) => dispatch(setActiveUser({
      loading: true,
      userInfo: {
        email: user?.displayName,
        name: user?.email
      },
      userToken: user?.uid
    })))
    if (!user.userToken) router.push('/login')
  }, [])

  return (
    <>
      <Link href={'/config'}>
        <div>
          <Config />
        </div>
      </Link>
      <AccountSummary locale={locale} />
    </>
  )
}

export default Home
