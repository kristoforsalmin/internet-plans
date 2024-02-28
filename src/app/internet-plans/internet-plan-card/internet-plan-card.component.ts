import { Component, Input } from '@angular/core'

import { InternetPlan } from '../internet-plan'

@Component({
  selector: 'app-internet-plan-card',
  templateUrl: './internet-plan-card.component.html',
  styleUrl: './internet-plan-card.component.scss'
})
export class InternetPlanCardComponent {
  @Input({ required: true }) plan!: InternetPlan
  @Input({ required: true }) position!: number
}
