import { BehaviorSubject } from "rxjs";
import { Filters } from "../global";
import { formatNumberMonth, getNumberOfMonth } from "./formatData";

interface Filter {
  name: string
  value: string
}
export class SubjectManager {
  private subject$: BehaviorSubject<Filters> = new BehaviorSubject({
    category: 'todas',
    week: 'todas',
    month: formatNumberMonth(new Date().getMonth()),
    type: 'Expenses'
  })

  get getSubject() {
    return this.subject$.asObservable()
  }

  // eslint-disable-next-line accessor-pairs
  set setSubject(filter: Filter) {
    if (filter.name === 'month') {
      this.subject$.next({
        ...this.subject$.getValue(),
        [filter.name]: formatNumberMonth(getNumberOfMonth(filter.value))
      })
      return
    }
    this.subject$.next({ ...this.subject$.getValue(), [filter.name]: filter.value })
  }
}