import { Pipe, PipeTransform } from '@angular/core'

import { InternetPlan } from './internet-plan'
import { SortOption } from './sort-option'

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(plans: InternetPlan[], sortOption: SortOption): InternetPlan[] {
    function compare(a: InternetPlan, b: InternetPlan) {
      const aValue = a[sortOption.property]
      const bValue = b[sortOption.property]

      return sortOption.ascending ? aValue - bValue : bValue - aValue
    }

    return plans.sort(compare)
  }
}
