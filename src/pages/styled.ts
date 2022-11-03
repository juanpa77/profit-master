import styled from "styled-components";

export const WrapperCard = styled('div')`
  display: grid;
  grid-template-rows: 1fr 1px 1fr;
  height: 189px;
  width: 75%;
  padding: 0 17px;
  background: #1b1d2f;
  color: white;
  box-shadow: 0px 3.17984px 12.7194px #d769ff;
  border-radius: 15px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`
type Props = {
  direction?: string
}
export const WrapperItem = styled('div')`
  display: flex;
  flex-direction: ${({ direction }: Props) => direction ? 'row' : 'column'};
  justify-content: ${({ direction }: Props) => direction && 'space-around'};
  align-items: center;
`

export const Item = styled('div')`
`
export const NumberItem = styled('div')`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
`

export const Line = styled('div')`
  background: var(--bottom-bg-colorPrimary);
`