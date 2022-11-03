
import styled from '@emotion/styled'

export const Background = styled('div')`
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-row-start: 1;
  grid-column-start: 1;
`

export const Wrapper = styled('div')`
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  height : 100vh;
  width: 100%;
  background-color: #ffff;
`

export const WrapperEffect = styled('div')`
  grid-column-start: 1;
  grid-row-start: 1;
  height : 100vh;
  width: 100%;
  background:  linear-gradient(90deg, rgba(255, 255, 255, 0) 8.33%, rgba(255, 255, 255, 0.64) 52.5%, rgba(249, 246, 246, 0) 99.98%, rgba(255, 255, 255, 0) 99.99%);
`

export const ColorRow = styled('div')`
  background-color: ${({ color }) => color};
  height : 100vh;
  width: 100%;
`