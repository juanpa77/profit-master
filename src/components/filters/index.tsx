import { useState } from "react"
import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { Filter, Select, Wrapper } from "./syled"

type Props = {
  locale: string | undefined
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const Filters = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es
  const filtersName = [
    { name: t.week, position: '1 / 2' },
    { name: t.month, position: '2/3' },
    { name: t.day, position: '3/4' }
  ]
  const [selectedFilter, setSelectedFilter] = useState(filtersName[0]);

  return (
    <Wrapper>
      <Select layout
        position={selectedFilter.position}
        transition={spring} />
      {filtersName.map((filter, i) =>
        <Filter
          key={filter.name}
          position={filter.position}
          onClick={() => setSelectedFilter(filter)}>
          {filter.name}
        </Filter>)}
    </Wrapper>
  )
}

export default Filters