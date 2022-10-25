import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, it } from "vitest";
import TransactionForm from ".";

beforeEach(() => {
  render(<TransactionForm locale="en" />)
})

describe('Transaction Form', () => {
  it('should render toggle transaction type', () => {
    // screen.getbye
  })
})