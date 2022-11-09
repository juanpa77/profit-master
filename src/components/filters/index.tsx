import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { Filter, Select, SelectedFilter, Wrapper, WrapperSelectedFilter } from "./styled"
import useFilter from "./useFilter"
import { getWeekOfMonth, getWeeksInMonth } from 'date-fns'
import { newArrayOfNumbers } from "../../utility/array"
import { getDaysInMonth } from 'date-fns'
import { FilterName } from "../../utility/subject-manager"

type Props = {
  locale: string | undefined
}

export interface Filters {
  idName: FilterName;
  name: string
  position: string;
  dates: string[];
  currentDate: number;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
const Filters = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es
  const weeksOfMonth = newArrayOfNumbers(getWeeksInMonth(new Date(), { weekStartsOn: 1 }))
  const daysOfMonth = newArrayOfNumbers(getDaysInMonth(new Date))

  const filters: Filters[] = [
    { idName: 'week', name: t.week, position: '1 / 2', dates: weeksOfMonth, currentDate: getWeekOfMonth(new Date(), { weekStartsOn: 1 }) - 1 },
    { idName: 'month', name: t.month, position: '2/3', dates: t.Months, currentDate: new Date().getMonth() },
    { idName: 'day', name: t.day, position: '3/4', dates: daysOfMonth, currentDate: new Date().getDate() - 1 }
  ]

  const {
    scroll,
    selectedFilter,
    setSelectedFilter,
    handleFilterDate,
    selectedDate
  } = useFilter({ filters })


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
        {selectedFilter.dates?.map(date => {
          return (
            <SelectedFilter
              onClick={() => handleFilterDate(date)}
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