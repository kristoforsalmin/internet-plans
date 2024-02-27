import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { InternetPlanCardComponent } from './internet-plan-card/internet-plan-card.component'
import { InternetPlanListComponent } from './internet-plan-list/internet-plan-list.component'
import { InternetPlansComponent } from './internet-plans/internet-plans.component'

import { InternetPlanService } from './internet-plan.service'

@NgModule({
  declarations: [
    InternetPlanCardComponent,
    InternetPlanListComponent,
    InternetPlansComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InternetPlansComponent
  ],
  providers: [
    InternetPlanService
  ]
})
export class InternetPlansModule {}
