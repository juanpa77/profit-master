import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Background = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-template-rows: 8fr 1fr;
  min-width: 360px;
  height: 100vh;
  background: #2e3148;
  gap: 8px;
`
export const NavBar = styled(motion.nav)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #1b1d2f;
  box-shadow: 0px -2px 25px rgba(0, 0, 0, 0.06);  
`
type Props = {
  isselected: boolean
}

export const Item = styled('div')`
  path{
    fill: ${({ isselected }: Props) => isselected && '#bd00ff45'};
    stroke: ${({ isselected }: Props) => isselected && '#d869ff'};
  }
`

export const Wrapper = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100%;
`