import { Wrapper } from "./styled"

type Props = {
  month: string
  nameFilter: string
  selectedDate: string | number
  handleClick: () => void
}

const SelectedFilter = ({ month, nameFilter, selectedDate, handleClick }: Props) => {
  return (
    <Wrapper onClick={handleClick}>
      {`${month} -- ${nameFilter} ${selectedDate}`}
    </Wrapper>
  )
}

export default SelectedFilter