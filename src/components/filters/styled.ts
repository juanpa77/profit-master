import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
width: 80%;
border-radius: 6px;
background-color: #12001b47;
gap: 20px 0px;
`
type Props = {
  position: string
}
// export const WrapperFilter = styled(motion.div)`
// display: grid;
// grid-template-columns: repeat(auto-fit, 1fr);
// grid-template-rows: repeat(2, 1fr);
// `

export const SelectBox = styled(motion.div)`
grid-row: 1/1;
margin: 3px;
padding: 10px 12px;
border-radius: 5px;
grid-column: ${({ position }: Props) => position};
background-color: #fff3;
`
type Prop = {
  isselected: string
}
export const SelectedFilter = styled(motion.div)`
border-radius: 5px;
background-color:${({ isselected }: Prop) => isselected === 'selected' ? '#740ba5' : '#fff3'};
text-align: center;
width: max-content;
padding: 5px;
margin: 0px 5px;
min-width: 50px;
`
export const WrapperOptions = styled(motion.div)`
display: grid;
height: max-content;
grid-column: 1/4;
grid-auto-flow: column;
overflow-x: scroll;
width: 100%;
`
export const FilterSelected = styled(motion.div)`
display: flex;
grid-column: 1/4;
background-color: #404358;
width: 100%;
border-radius: 5px;
min-width: 50px;
align-items: center;
justify-content: center;
`

export const WrapperFilter = styled(motion.div)`
grid-row: 1/1;
grid-column: ${({ position }: Props) => position};
border-radius: 5px;
padding: 10px 12px;
margin: 3px;
text-align: center;
cursor: pointer;
`