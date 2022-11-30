import { Wrapper } from "./styled"
import Google from '../../../public/assets/icons/google.svg'
type Props = {
  onClick: () => void
}

export const LoginBtn = ({ onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} >
      <Google role={"button"} />
      Login
    </Wrapper>
  )
}