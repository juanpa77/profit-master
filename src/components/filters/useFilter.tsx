import { sharingFilter } from "../../services/sharing-filter"


const useFilter = () => {
  const handleFilter = (month: number) => {
    console.log(month.toString())
    sharingFilter.setSubject = {
      name: 'month',
      value: month.toString()
    }
  }

  return handleFilter
}

export default useFilter