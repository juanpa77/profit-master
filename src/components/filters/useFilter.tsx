import { useState, useEffect, RefObject, useRef } from "react";
import filters from ".";
import { sharingFilter } from "../../services/sharing-filter"

type Props = {
  filters: {
    name: string;
    position: string;
    dates: string[];
    currentDate: number;
  }[]
  // scroll: RefObject<HTMLDivElement>
}

const useFilter = ({ filters, }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[1]);
  const [selectedDate, setSelectedDate] = useState(selectedFilter.dates![selectedFilter.currentDate]);
  const scroll = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(new Date().getDate())
    const position = filters[1].dates!.indexOf(selectedDate) * 55
    setSelectedDate(selectedFilter.dates![selectedFilter.currentDate])
    scroll.current?.scroll(position, 0)
  }, [selectedFilter, selectedDate])

  const handleFilterDate = (month: string, index: number) => {
    setSelectedDate(month)
    handleFilter(index)
  }
  const handleFilter = (month: number) => {
    console.log(month.toString())
    sharingFilter.setSubject = {
      name: 'month',
      value: month.toString()
    }
  }

  return { scroll, selectedFilter, setSelectedFilter, handleFilterDate, selectedDate }
}

export default useFilter