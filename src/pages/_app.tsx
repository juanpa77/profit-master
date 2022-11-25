import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store, { wrapper } from '../store'
import Layout from '../components/layout'
import { useEffect } from 'react'
import { getAllTransactionsRequest } from '../redux/transactions/transactionsSlice'
import { useAppDispatch } from '../redux/useApp'
import { formatNumberMonth } from '../utility/formatData'
import { startOfWeek } from 'date-fns'

function MyApp({ Component, pageProps }: AppProps) {
  const currentDate = startOfWeek(new Date(), { weekStartsOn: 1 })
  const currentMonth = formatNumberMonth(currentDate.getMonth())
  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(getAllTransactionsRequest(currentMonth)) }, [currentMonth, dispatch])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
