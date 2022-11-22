import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { FilterSelected, Select, Wrapper } from "../../components/filters/styled"
import { getWeekOfMonth, getWeeksInMonth } from 'date-fns'
import { newArrayOfNumbers } from "../../utility/array"
import { getDaysInMonth } from 'date-fns'
import { FilterName } from "../../utility/subject-manager"
import useFilter from "../../components/filters/useFilter"
import Filter from '../../components/filters/filter'
import { AnimatePresence } from "framer-motion"
import Options from "../../components/filters/Options"

type Props = {
  locale: string | undefined
}

export interface Filter {
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

const DataFilters = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es
  const weeksOfMonth = newArrayOfNumbers(getWeeksInMonth(new Date(), { weekStartsOn: 1 }))
  const daysOfMonth = newArrayOfNumbers(getDaysInMonth(new Date))

  const FILTERS: Filter[] = [
    { idName: 'week', name: t.week, position: '1 / 2', dates: weeksOfMonth, currentDate: getWeekOfMonth(new Date(), { weekStartsOn: 1 }) - 1 },
    { idName: 'month', name: t.month, position: '2/3', dates: t.Months, currentDate: new Date().getMonth() },
    { idName: 'day', name: t.day, position: '3/4', dates: daysOfMonth, currentDate: new Date().getDate() - 1 }
  ]
  const {
    show,
    selectedFilter,
    selectedDate,
    scroll,
    handleFilterSelected,
    handleSelectedDate
  } = useFilter({ filter: FILTERS[1] })

  return (
    <Wrapper>
      <Select layout
        position={selectedFilter.position}
        transition={spring}
      />
      {FILTERS.map(filter =>
        <Filter
          key={filter.name}
          filter={filter}
          handleSelectedFilter={() => handleFilterSelected(filter)}
        />
      )}
      <AnimatePresence>
        {show
          ? <Options
            scrollRef={scroll}
            handleClick={handleSelectedDate}
            selectedDate={selectedDate}
            optionsName={selectedFilter.dates}
          />
          : <FilterSelected>
            {`${FILTERS[1].dates[FILTERS[1].currentDate]} -- ${selectedFilter.name} ${selectedFilter.currentDate}`}
          </FilterSelected>
        }
      </AnimatePresence>
    </Wrapper>
  )
}

export default DataFilters