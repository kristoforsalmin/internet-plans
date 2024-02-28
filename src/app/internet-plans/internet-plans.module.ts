import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { InternetPlanCardComponent } from './internet-plan-card/internet-plan-card.component'
import { InternetPlanListComponent } from './internet-plan-list/internet-plan-list.component'
import { InternetPlansComponent } from './internet-plans.component'

import { InternetPlanService } from './internet-plan.service'

import { SortByPipe } from './sort-by.pipe'

@NgModule({
  declarations: [
    InternetPlanCardComponent,
    InternetPlanListComponent,
    InternetPlansComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InternetPlansComponent
  ],
  providers: [
    InternetPlanService
  ]
})
export class InternetPlansModule {}
