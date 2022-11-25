import { WrapperFilter } from "./styled"
import { Filter } from "../../modules/filters"

type Props = {
  filter: Filter
  handleSelectedFilter: (filter: Filter) => void
}
const Filter = ({ handleSelectedFilter, filter }: Props) => {


  return (
    <WrapperFilter
      position={filter.position}
      whileTap={{ scale: 0.50 }}
      onClick={() => handleSelectedFilter(filter)}>
      {filter.name}
    </WrapperFilter>
  )
}

export default Filter