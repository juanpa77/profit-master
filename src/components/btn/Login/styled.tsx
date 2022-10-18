import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  /* grid-column-start: 1; */
  /* grid-row-start: 1; */
  width: 200px;
  height: 40px;
  border-radius: 40px;
  margin: 10px;
  background: #f2f2f2;
  color: #b960f8;
  path {
    fill: #b960f8;
  }
`