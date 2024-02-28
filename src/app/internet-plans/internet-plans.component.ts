import { Component, OnInit } from '@angular/core'

import { InternetPlanService } from './internet-plan.service'

import { InternetPlan, SortableProperty } from './internet-plan'
import { SortOption } from './sort-option'

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrl: './internet-plans.component.scss'
})
export class InternetPlansComponent implements OnInit {
  internetPlans: InternetPlan[] = []

  sortOptions: SortOption[] = [
    { label: 'Fastest', property: SortableProperty.Speed, ascending: false },
    { label: 'Cheapest', property: SortableProperty.Price, ascending: true }
  ]

  sortedBy: SortOption = this.sortOptions[0]

  constructor(private service: InternetPlanService) {}

  ngOnInit() {
    this.service.fetchAll().subscribe((plans) => {
      this.internetPlans = plans
    })
  }
}
