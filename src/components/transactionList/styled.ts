import styled from "@emotion/styled";

export const Wrapper = styled('ul')`
display: grid;
height: 100%;
width: 75%;
overflow-x: scroll;

`
export const TransactionItem = styled('li')`
  display: grid;
  grid-template-areas: 
            'I C D'
            'I A D';
  min-height: 60px;
  border-bottom: 1px solid #e4ebe6  ;
  padding: 6px;
`
type Props = {
  gridArea: 'I' | 'C' | 'D' | 'A'
}

export const Item = styled('div')`
  grid-area: ${({ gridArea }: Props) => gridArea};
`
export const Line = styled('div')`
  width: 1px;
  background: #e4ebe6
  `