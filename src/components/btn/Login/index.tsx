import { Wrapper } from "./styled"
import Google from '../../../public/assets/icons/google.svg'
type Props = {
  onClick: () => void
}

export const LoginBtn = ({ onClick }: Props) => {
  // const colors = { background: ['#ee2929', '#1b15c4', '#00e1ce', '#c415b3'] }
  return (
    <Wrapper onClick={onClick} >
      <Google role={"button"} />
      Login
    </Wrapper>
  )
}