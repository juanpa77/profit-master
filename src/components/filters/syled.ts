import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
border-radius: 6px;
background-color: #8e05d247;
`
type Props = {
  isselected: boolean
}
export const Filter = styled(motion.div)`
margin: 3px;
padding: 10px 12px;
border-radius: 5px;
background-color: ${({ isselected }: Props) => isselected && '#4c4f67d4'};
`