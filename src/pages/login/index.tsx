import Logo from "../../components/common/Logo"
import { Section, Wrapper } from "./styled"
import { AnimateBackground } from "../../components/common/AnimateBackground"
import { LoginBtn } from "../../components/btn/Login"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/useApp"
import { NextOrObserver, User } from "firebase/auth"
import { setActiveUser } from "../../modules/user/userSlice"
import { observerAuth, signWithGoogle } from "../../services/firebase/authProvider"
import { useRouter } from "next/router"

const Login = () => {
  const user = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const isAuth: NextOrObserver<User> = user => {
    dispatch(
      setActiveUser({
        loading: true,
        userInfo: {
          email: user?.displayName,
          name: user?.email
        },
        userToken: user?.uid
      })
    )
  }

  // add (user)
  const login = () => {
    signWithGoogle()
  }

  useEffect(() => {
    user && router.replace('./home')
  }, [user])

  useEffect(() => {
    observerAuth(isAuth)
  }, [login])

  return (
    <>
      <Wrapper>
        <AnimateBackground />
        <Section>
          <Logo fillColor="#ff00f7" />
          <LoginBtn onClick={login} />
        </Section>
      </Wrapper>
    </>
  )
}

export default Login