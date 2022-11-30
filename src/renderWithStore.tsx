import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'

import { RootState } from './store'
import { JSXElementConstructor, ReactElement } from 'react'
import userSlice from './redux/user/userSlice'

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: userSlice,
  })
}

export const renderWithStore = (component: ReactElement<any, string | JSXElementConstructor<any>>) => {
  const Wrapper = ({ children }: { children: JSX.Element }) => (
    <Provider store={testStore({})}>{children}</Provider>
  )
  return render(component, { wrapper: Wrapper })
}