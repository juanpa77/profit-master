import Logo from "../../components/common/Logo"
import { Section, Wrapper } from "./styled"
import { AnimateBackground } from "../../components/common/AnimateBackground"
import { LoginBtn } from "../../components/btn/Login"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../modules/user/useAuth"
import { NextOrObserver, User } from "firebase/auth"
import { setActiveUser } from "../../modules/user/userSlice"
import { signWithGoogle } from "../../services/firebase/authProvider"

const Login = () => {
  const user = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  const isAuth: NextOrObserver<User> = user => {
    dispatch(setActiveUser({
      loading: true,
      userInfo: {
        email: user?.displayName,
        name: user?.email
      },
      userToken: user?.uid
    }))
  }

  // add (user)
  const login = () => {
    signWithGoogle()
    // navigate('/')
  }
  /* 
    useEffect(() => {
      observerAuth(isAuth)
    }, []) */

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