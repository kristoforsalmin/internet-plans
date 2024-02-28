import { NgModule, importProvidersFrom } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { InternetPlansModule } from './internet-plans/internet-plans.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InternetPlansModule
  ],
  providers: [
    importProvidersFrom(HttpClientModule)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
