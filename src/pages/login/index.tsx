import Logo from "../../components/common/Logo"
import { Section, Wrapper } from "./styled"
import { AnimateBackground } from "../../components/common/AnimateBackground"
import { LoginBtn } from "../../components/btn/Login"
import { useEffect } from "react"
import { useAppSelector } from "../../redux/useApp"
import { signWithGoogle } from "../../services/firebase/authProvider"
import { useRouter } from "next/router"

const Login = () => {
  const user = useAppSelector(state => state.user)
  const router = useRouter()
  const login = () => signWithGoogle().then(() => router.replace('/'))

  useEffect(() => { user.userToken && router.push('/') }, [])

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