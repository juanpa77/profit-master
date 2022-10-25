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

  span{
    grid-row: 1/1;
    /* width: 100%; */
    /* height: 100%; */
    /* color: black */
  }
  span:nth-child(2){
    grid-column: 1/2;
    /* color: ${({ positioncolumncheckbox }: Props) => positioncolumncheckbox === '1/2' && '#5e1ca0'}; */
  }
  span:nth-child(3){
    grid-column: 2/3;
  }
  `
export const Box = styled(motion.div)`
    grid-row: 1/1;
    grid-column: ${({ positioncolumncheckbox }: Props) => positioncolumncheckbox};
    /* width: 100%; */
    /* height: 100%; */
    color: black
`

export const CheckBox = styled(motion.div)`
  width: 91%;
  height: 76%;
  grid-column: ${({ positioncolumncheckbox }: Props) => positioncolumncheckbox};
  grid-row: 1/1;
  background-color: white;
  /* color: black; */
  border-radius: 40px;
`