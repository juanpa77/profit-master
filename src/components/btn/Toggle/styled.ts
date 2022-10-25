import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Props = {
  positioncolumncheckbox: string
}

export const Switch = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 45px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  justify-items: center;
  align-items: center;
  cursor: pointer;
  `
export const Box = styled(motion.div)`
    grid-row: 1/1;
    grid-column: ${({ positioncolumncheckbox }: Props) => positioncolumncheckbox};
    color: black
`

export const CheckBox = styled(motion.div)`
  width: 91%;
  height: 76%;
  grid-column: ${({ positioncolumncheckbox }: Props) => positioncolumncheckbox};
  grid-row: 1/1;
  background-color: white;
  border-radius: 40px;
`