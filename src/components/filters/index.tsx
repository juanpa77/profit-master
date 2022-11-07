import { useState } from "react"
import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { Filter, Wrapper } from "./syled"

type Props = {
  locale: string | undefined
}

const Filters = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es
  const filtersName = [t.month, t.week, t.day]
  const [selectedFilter, setSelectedFilter] = useState(filtersName[0]);

  return (
    <Wrapper>
      {filtersName.map(filter =>
        <Filter
          key={filter}
          isselected={selectedFilter === filter}
          onClick={() => setSelectedFilter(filter)}>
          {filter}
        </Filter>)}
    </Wrapper>
  )
}

export default Filters