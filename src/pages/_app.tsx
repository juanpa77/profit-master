import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/layout'
import { FC } from 'react'
import { wrapper } from '../store'

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
