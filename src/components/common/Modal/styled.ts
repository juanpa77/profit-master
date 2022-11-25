import styled from "@emotion/styled";
import { motion } from "framer-motion";


export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const Controls = styled(motion.button)`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 50px;
  align-items: center;
  background: #57eb64;
  color: black;
  border: none;
  padding: 15px 25px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  width: 150px;
`
export const Box = styled(motion.div)`
   width: 300px;
  height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #57eb64;
  color: #222;
  font-size: 240px;
  line-height: 260px;
  font-weight: 700;
  border-radius: 30px;
`