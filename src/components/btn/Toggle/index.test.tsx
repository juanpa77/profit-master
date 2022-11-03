import { cleanup, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Toggle from ".";
import { CheckBox } from "./styled";
import useToggle from "./useToggle";

// vi.mock('./useToggle.tsx')

beforeEach(() => {
  render(<Toggle locale="en" />)
})

describe('Toggle btn', () => {
  afterEach(cleanup)

  it('should render switch with checkbox expenses and income', () => {
    render(<CheckBox positioncolumncheckbox='expenses' />)
    screen.getByRole('checkbox')
  })

  it('should switch active checkbox when user clicking', async () => {
    const incomeBtn = screen.getByText('income')
    const switchBox = screen.getByRole('checkbox')

    fireEvent.click(incomeBtn)
    expect(getComputedStyle(switchBox).gridColumn).toEqual('1/2')
  })
  /* 
    it('should change transaction type when user clicking', async () => {
      const incomeBtn = screen.getByText('income')
      const mock = vi.fn(useToggle)
      console.log(useToggle)
      // const handleToggle = vi.fn().mockImplementation(() => {
      //   handleToggle: vi.fn()
      // })
      // vi.mocked(useToggle).mockRestore()
  
    }) */
}) 