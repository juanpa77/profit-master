import { describe, expect, it } from "vitest";
import { Transaction } from "../../../global";
import { calcAvailableForCurrentWeek, calcTotalAmount } from "./calcAmount";

describe('calculate available for the current week', () => {
  it('should return the difference between the monthly income and expenses divide by the number of weeks in te current month and subtract expenses of the current week', () => {
    expect(calcAvailableForCurrentWeek(1200, 100, 20)).toBe(200)
  })
})

describe('calcAmount', () => {
  it('should return the sum of transactions', () => {
    const feckTransactions: Transaction[] = [{
      id: '10',
      type: 'expenses',
      amount: 10,
      date: `${new Date()}`,
      category: "",
      description: "",
      week: 1
    },
    {
      id: '11',
      type: 'expenses',
      amount: 20,
      date: `${new Date()}`,
      category: "",
      description: "",
      week: 1
    },
    {
      id: '10',
      type: 'expenses',
      amount: 25,
      date: `${new Date()}`,
      category: "",
      description: "",
      week: 1
    }
    ]
    expect(calcTotalAmount(feckTransactions)).toBe(55)
  })
})