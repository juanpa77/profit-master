import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled('div')`
  display: grid;
  grid-column-start: 1;
  grid-row-start: 2;
  grid-template-columns: repeat(4, 1fr);
  height: 50vh;
  width: 45%;
  min-width: 390px;
  min-height: 470px;
  border-radius: 40px;
  background:  linear-gradient(180deg, #C069FF 0%, rgba(16, 7, 23, 0.96) 100%);
  justify-items: center;
  align-items: center;
  overflow: hidden;
`

export const Item = styled(motion.div)`
  height: 25px;
  width: 25px;
  padding-left: 4px;
`