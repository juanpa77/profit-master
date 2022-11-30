import { ReactElement } from "react"
import { Wrapper } from "./styled"
type Props = {
  onClick: () => void
  children?: ReactElement
  label: string
}

export const Btn = ({ onClick, label, children }: Props) => {
  return (
    <Wrapper onClick={onClick} >
      {children}
      {label}
    </Wrapper>
  )
}