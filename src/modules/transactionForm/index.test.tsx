import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, it } from "vitest";
import TransactionForm from ".";

beforeEach(() => {
  render(<TransactionForm locale="en" />)
})

describe('Transaction Form', () => {
  afterEach(cleanup)
  it('should render content', () => {
    screen.getByLabelText('amount')
    screen.getByLabelText('date')
    screen.getByLabelText('list categories')
    screen.getByLabelText('description')
    screen.getByLabelText('submit button')
  })
})