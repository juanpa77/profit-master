import en from "../../public/locale/en"
import es from "../../public/locale/es"
import { SelectBox, Wrapper } from "../../components/filters/styled"
import { getWeekOfMonth, getWeeksInMonth } from 'date-fns'
import { newArrayOfNumbers } from "../../utility/array"
import { getDaysInMonth } from 'date-fns'
import useFilter from "./useFilter"
import Filter from '../../components/filters/filter'
import { AnimatePresence } from "framer-motion"
import OptionsList from "../../components/filters/Options"
import { Options } from "../../components/filters/Options"
import { getNumberOfMonth } from "../../utility/formatData"
import SelectedFilter from "./selectedFilter"

type Props = {
  locale: string | undefined
}

export type FilterDateNames = 'month' | 'week' | 'day'

export interface Filter {
  idName: FilterDateNames;
  name: string
  position: string;
  dates: Options;
  currentDate: number;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const DataFilters = ({ locale }: Props) => {
  const t = locale === 'en' ? en : es
  const weeksOfMonth: Options = newArrayOfNumbers(getWeeksInMonth(new Date(), { weekStartsOn: 1 }))
    .map(day => { return { label: day.toString(), value: day } })
  const daysOfMonth: Options = newArrayOfNumbers(getDaysInMonth(new Date))
    .map(day => { return { label: day.toString(), value: day } })
  const monthOfYear: Options = t.Months
    .map(month => { return { label: month, value: getNumberOfMonth(month) } })

  const FILTERS: Filter[] = [
    { idName: 'week', name: t.week, position: '1 / 2', dates: weeksOfMonth, currentDate: getWeekOfMonth(new Date(), { weekStartsOn: 1 }) - 1 },
    { idName: 'month', name: t.month, position: '2/3', dates: monthOfYear, currentDate: new Date().getMonth() },
    { idName: 'day', name: t.day, position: '3/4', dates: daysOfMonth, currentDate: new Date().getDate() - 1 }
  ]

  const {
    show,
    selectedDate,
    selectedFilter,
    scrollRef,
    handleFilterSelected,
    handleSelectedDate,
    setShow
  } = useFilter({ filter: FILTERS[1] })

  return (
    <Wrapper>
      <SelectBox layout
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
          ? <OptionsList
            scrollRef={scrollRef}
            handleClick={handleSelectedDate}
            selectedOption={selectedDate}
            options={selectedFilter.dates}
          />
          : <SelectedFilter
            handleClick={() => setShow(true)}
            month={FILTERS[1].dates[FILTERS[1].currentDate].label}
            nameFilter={selectedFilter.name}
            selectedDate={selectedDate}
          />
        }
      </AnimatePresence>
    </Wrapper>
  )
}

export default DataFilters