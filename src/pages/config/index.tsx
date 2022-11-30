import { useRouter } from "next/router"
import { Btn } from "../../components/btn/Login/base"
import { closeCession } from "../../services/firebase/authProvider"

const Config = () => {
  console.log('tes')
  const router = useRouter()
  const goToLogin = () => router.push('/login')
  return (
    <Btn onClick={() => closeCession(goToLogin)} label="logout"></Btn>
  )
}

export default Config
