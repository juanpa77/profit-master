import { Section, Wrapper } from "./styled"
// import Logo from '../../public/assets/logo.svg'
import { AnimateBacground } from "../../components/common/AnimateBackground"
import { LoginBtn } from "../../components/btn/Loguin"
import Logo from '../../public/assets/logo.svg'

const Loguin = () => {
  return (
    <>
      <Wrapper>
        <AnimateBacground />
        <Section>
          <Logo />
          <LoginBtn />
        </Section>
      </Wrapper>
    </>
  )
}

export default Loguin