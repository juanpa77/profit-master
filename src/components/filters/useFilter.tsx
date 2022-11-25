import { useState, useEffect, useRef } from "react";
import { Filter } from "../../modules/filters";
import { setDateFilter } from "../../redux/filters/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/useApp";

type Props = {
  filter: Filter
}

const useFilter = ({ filter }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const filterSelector = useAppSelector(state => state.filters)

  const [selectedFilter, setSelectedFilter] = useState(filter);
  const [show, setShow] = useState(true);

  const selectedDate = filterSelector[selectedFilter.idName]

  useEffect(() => {
    const scrollPosition = selectedDate * 50
    scrollRef.current?.scroll(scrollPosition, 0)
  }, [selectedDate, selectedFilter])

  const handleFilterSelected = (filter: Filter) => {
    setSelectedFilter(filter)
    setShow(!show)
  }

  const handleSelectedDate = (date: number) => {
    dispatch(setDateFilter({ name: selectedFilter.idName, value: date }))
    setShow(!show)
  }

  return { selectedFilter, handleFilterSelected, handleSelectedDate, selectedDate, show, scrollRef }
}

export default useFilter