import { useState, useEffect, useRef } from "react";
import { Filter } from "../../modules/filters";
import { sharingFilter } from "../../services/sharing-filter"
import { getNumberOfMonth } from "../../utility/formatData";

type Props = {
  filter: Filter
}

const useFilter = ({ filter }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState(filter);
  const [selectedDate, setSelectedDate] = useState(selectedFilter.dates![selectedFilter.currentDate]);
  const [show, setShow] = useState(true);
  const scroll = useRef<HTMLDivElement>(null)


  useEffect(() => setSelectedDate(selectedFilter.dates![selectedFilter.currentDate]), [selectedFilter.currentDate, selectedFilter.dates])
  useEffect(() => {
    console.log('test')
    setSelectedDate((selectedDate) =>
      ((result) => {
        const position = selectedFilter.dates!.indexOf(result) * 50
        scroll.current?.scroll(position, 0)
        return result
      })(selectedFilter.dates![selectedFilter.currentDate])
    )
  }, [selectedFilter, setSelectedFilter])

  const handleFilterSelected = (filter: Filter) => {
    setSelectedFilter(filter)
    setShow(!show)
  }

  const handleSelectedDate = (date: string) => {
    const formateDate = selectedFilter.idName === 'month'
      ? getNumberOfMonth(date).toString()
      : date
    setSelectedDate(date)
    setShow(!show)

    // sharingFilter.setSubject = {
    //   name: selectedFilter.idName,
    //   value: formateDate
    // }
  }

  return { selectedFilter, handleFilterSelected, handleSelectedDate, selectedDate, show, scroll }
}

export default useFilter