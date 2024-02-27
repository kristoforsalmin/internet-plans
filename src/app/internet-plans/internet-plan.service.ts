import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { InternetPlan } from './internet-plan'

const INTERNET_PLANS_URL = 'assets/internet-plans.json'

@Injectable()
export class InternetPlanService {
  constructor(private client: HttpClient) {}

  fetchAll() {
    return this.client.get<InternetPlan[]>(INTERNET_PLANS_URL)
  }
}
