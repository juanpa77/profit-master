import { startOfWeek } from "date-fns";
import { describe, expect, it } from "vitest";
import { isDayInCurrentWeek } from "./filtersTransactions";

describe('isDayInCurrentWeek', () => {
  it('should return true if day belong to current week', () => {
    const startDayOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 })
    expect(isDayInCurrentWeek(startDayOfWeek)).toBe(true)
  })
})