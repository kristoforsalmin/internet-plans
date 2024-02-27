import { Component } from '@angular/core';

import { InternetPlanService } from './internet-plan.service'
import { InternetPlan } from './internet-plan'

@Component({
  selector: 'app-internet-plans',
  templateUrl: './internet-plans.component.html',
  styleUrl: './internet-plans.component.scss'
})
export class InternetPlansComponent {
  internetPlans: InternetPlan[] = []

  constructor(private service: InternetPlanService) {}

  ngOnInit() {
    this.service.fetchAll().subscribe((internetPlans) => {
      this.internetPlans = internetPlans
    })
  }
}
