// import { ReactNode } from "react"
import { Background, ColorRow, Wrapper, WrapperEffect } from "./styled"

type Props = {
  colors: string[],
  // children: ReactNode
}

export const BackgroundColorRow = ({ colors }: Props) => {
  return (
    <Background>
      <Wrapper>
        {colors.map(color => <ColorRow key={color} color={color}></ColorRow>)}
      </Wrapper>
      <WrapperEffect />
    </Background>
  )
}
