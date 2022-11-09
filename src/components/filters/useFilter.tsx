import { useState, useEffect, useRef } from "react";
import { sharingFilter } from "../../services/sharing-filter"

type Props = {
  filters: {
    name: string;
    position: string;
    dates: string[];
    currentDate: number;
  }[]
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

  const handleFilterDate = (date: string, index: number) => {
    setSelectedDate(date)
    sharingFilter.setSubject = {
      name: 'month',
      value: index.toString()
    }
  }

  return { scroll, selectedFilter, setSelectedFilter, handleFilterDate, selectedDate }
}

export default useFilter