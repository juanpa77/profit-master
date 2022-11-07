import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 80%;
border-radius: 6px;
background-color: #12001b47;
`
type Props = {
  position: string
}
export const Filter = styled(motion.div)`
grid-row: 1/1;
margin: 3px;
padding: 10px 12px;
border-radius: 5px;
grid-column: ${({ position }: Props) => position};
`
export const Select = styled(motion.div)`
grid-row: 1/1;
margin: 3px;
padding: 10px 12px;
border-radius: 5px;
grid-column: ${({ position }: Props) => position};
background-color: #fff3;
`