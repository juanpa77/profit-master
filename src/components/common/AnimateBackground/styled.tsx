import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled('div')`
  display: grid;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  width: 100%;
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