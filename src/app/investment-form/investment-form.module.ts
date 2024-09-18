import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentFormRoutingModule } from './investment-form-routing.module';
import { InvestmentFormComponent } from './investment-form.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';


@NgModule({
  declarations: [
    InvestmentFormComponent,
    InvestmentDetailsComponent
  ],
  imports: [
    CommonModule,
    InvestmentFormRoutingModule
  ]
})
export class InvestmentFormModule { }
