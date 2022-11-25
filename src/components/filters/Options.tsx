import { RefObject } from "react"
import { SelectedFilter, WrapperOptions } from "./styled"

export type Options = {
  label: string
  value: number
}[]

type Props = {
  handleClick: (date: number) => void
  selectedOption: number
  options: Options
  scrollRef: RefObject<HTMLDivElement>
}

const Options = ({ handleClick, selectedOption, options, scrollRef }: Props) => {
  return (
    <WrapperOptions ref={scrollRef}>
      {options.map(option => {
        return (
          <SelectedFilter
            onClick={() => handleClick(option.value)}
            isselected={selectedOption === option.value ? 'selected' : ''}
            key={option.label}>
            {option.label}
          </SelectedFilter>
        )
      })}
    </WrapperOptions>
  )
}

export default Options