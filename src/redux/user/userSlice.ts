import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  loading: boolean
  userInfo: {
    name: string | null | undefined
    email: string | null | undefined
  }
  userToken: string | null | undefined,
}


const initialState: User = {
  loading: false,
  userInfo: {
    name: '',
    email: null
  },
  userToken: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User | null>) => {
      state.loading = action.payload!.loading
      state.userInfo.name = action.payload!.userInfo.name
      state.userInfo.email = action.payload!.userInfo.email
      state.userToken = action.payload!.userToken
    },
    setLogOutUser: state => {
      state.userInfo.name = null
      state.userInfo.email = null
    },
  },
  extraReducers: {}
})

export const { setActiveUser, setLogOutUser } = userSlice.actions
export const selectUserName = (state: User) => state.userInfo.name
export const selectUserEmail = (state: User) => state.userInfo.email
export const getIdUser = (state: User) => state.userToken

export default userSlice.reducer