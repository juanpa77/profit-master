import { BehaviorSubject } from "rxjs";
import { Filters } from "../global";
import { formatNumberMonth, getNumberOfMonth } from "./formatData";

export type FilterName = 'month' | 'day' | 'week' | 'type'
interface Filter {
  name: FilterName
  value: string
}
export class SubjectManager {
  private subject$ = new BehaviorSubject<Filters>({
    type: 'expenses',
    category: 'todas',
    week: 'todas',
    month: formatNumberMonth(new Date().getMonth())
  })

  get getSubject() {
    return this.subject$.asObservable()
  }

  // eslint-disable-next-line accessor-pairs
  set setSubject(filter: Filter) {
    if (filter.name === 'month') {
      this.subject$.next({
        ...this.subject$.getValue(),
        [filter.name]: formatNumberMonth(filter.value)
      })
      return
    }
    this.subject$.next({
      ...this.subject$.getValue(),
      [filter.name]: filter.value
    })
  }
}