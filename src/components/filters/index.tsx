import { useEffect, useRef, useState } from "react"
import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { Filter, Select, SelectedFilter, Wrapper, WrapperSelectedFilter } from "./styled"
import useFilter from "./useFilter"
import { getWeekOfMonth, getWeeksInMonth } from 'date-fns'
import { newArrayOfNumbers } from "../../utility/array"
import { getDaysInMonth } from 'date-fns'

type Props = {
  locale: string | undefined
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
const weeksOfMonth = newArrayOfNumbers(getWeeksInMonth(new Date(), { weekStartsOn: 1 }))
const daysOfMonth = newArrayOfNumbers(getDaysInMonth(new Date))
const Filters = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es

  const filters = [
    { name: t.week, position: '1 / 2', dates: weeksOfMonth, currentDate: getWeekOfMonth(new Date(), { weekStartsOn: 1 }) - 1 },
    { name: t.month, position: '2/3', dates: t.Months, currentDate: new Date().getMonth() },
    { name: t.day, position: '3/4', dates: daysOfMonth, currentDate: new Date().getDate() - 1 }
  ]

  const [selectedFilter, setSelectedFilter] = useState(filters[1]);
  const [selectedDate, setSelectedDate] = useState(selectedFilter.dates![selectedFilter.currentDate]);

  const scroll = useRef<HTMLDivElement>(null)
  const handleFilter = useFilter()

  useEffect(() => {
    console.log(new Date().getDate())
    const position = filters[1].dates!.indexOf(selectedDate) * 55
    setSelectedDate(selectedFilter.dates![selectedFilter.currentDate])
    scroll.current?.scroll(position, 0)
  }, [selectedFilter])

  const handleFilterDate = (month: string, index: number) => {
    setSelectedDate(month)
    handleFilter(index)
  }

  return (
    <>
      <Wrapper>
        <Select layout
          position={selectedFilter.position}
          transition={spring} />
        {filters.map((filter, i) =>
          <Filter
            key={filter.name}
            position={filter.position}
            onClick={() => setSelectedFilter(filter)}>
            {filter.name}
          </Filter>)}
      </Wrapper>
      <WrapperSelectedFilter
        ref={scroll}
      >
        {selectedFilter.dates?.map((date, i) => {
          return (
            <SelectedFilter
              onClick={() => handleFilterDate(date, i)}
              isselected={(selectedDate === date) ? 'selected' : ''}
              key={date}>
              {date}
            </SelectedFilter>
          )
        })}
      </WrapperSelectedFilter>
    </>
  )
}

export default Filters