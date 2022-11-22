import { RefObject } from "react"
import { SelectedFilter, WrapperOptions } from "./styled"

type Props = {
  handleClick: (date: string) => void
  selectedDate: string
  optionsName: string[]
  scrollRef: RefObject<HTMLDivElement>
}

const Options = ({ handleClick, selectedDate, optionsName, scrollRef }: Props) => {
  return (
    <WrapperOptions ref={scrollRef}>
      {optionsName.map(name => {
        return (
          <SelectedFilter
            onClick={() => handleClick(name)}
            isselected={selectedDate === name ? 'selected' : ''}
            key={name}>
            {name}
          </SelectedFilter>
        )
      })}
    </WrapperOptions>
  )
}

export default Options