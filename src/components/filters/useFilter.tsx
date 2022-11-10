import { useState, useEffect, useRef } from "react";
import { Filters } from ".";
import { sharingFilter } from "../../services/sharing-filter"
import { getNumberOfMonth } from "../../utility/formatData";

type Props = {
  filters: Filters[]
}

const useFilter = ({ filters, }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[1]);
  const [selectedDate, setSelectedDate] = useState(selectedFilter.dates![selectedFilter.currentDate]);
  const scroll = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelectedDate((selectedDate) =>
      ((result) => {
        const position = selectedFilter.dates!.indexOf(result) * 50
        scroll.current?.scroll(position, 0)
        return result
      })(selectedFilter.dates![selectedFilter.currentDate])
    )
  }, [selectedFilter, setSelectedFilter])

  const handleFilterDate = (date: string) => {
    const formateDate = selectedFilter.idName === 'month'
      ? getNumberOfMonth(date).toString()
      : date
    setSelectedDate(date)
    sharingFilter.setSubject = {
      name: selectedFilter.idName,
      value: formateDate
    }
  }

  return { scroll, selectedFilter, setSelectedFilter, handleFilterDate, selectedDate }
}

export default useFilter