import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Toggle from ".";
import { CheckBox } from "./styled";

beforeEach(() => {
  render(<Toggle locale="en" />)
})

describe('Toggle btn', () => {
  afterEach(cleanup)

  it('should render switch with checkbox expenses and income', () => {
    render(<CheckBox positioncolumncheckbox='expenses' />)
    const checkbox = screen.getByRole('checkbox')
  })

  it('should switch active checkbox when user clicking', () => {
    const setTransactionType = vi.fn()
    const transactionType = 'expenses'
    const switchBtn = screen.getByRole('switch')
  })
})