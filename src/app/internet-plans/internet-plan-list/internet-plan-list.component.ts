import { Component, Input } from '@angular/core'

import { InternetPlan } from '../internet-plan'

@Component({
  selector: 'app-internet-plan-list',
  templateUrl: './internet-plan-list.component.html',
  styleUrl: './internet-plan-list.component.scss'
})
export class InternetPlanListComponent {
  @Input() plans: InternetPlan[] = []
}
