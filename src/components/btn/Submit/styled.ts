import styled from "@emotion/styled"

export const Base = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(109.5deg, #7569ff -22.6%, #d869ff 118.85%);
  border-radius: 15px;
  color: white;
  cursor: pointer;
  border: none;
  width: 100px;
  min-height: 20px;
`

export const Submit = styled(Base)`
  width: 251px;
  height: 60px;
`