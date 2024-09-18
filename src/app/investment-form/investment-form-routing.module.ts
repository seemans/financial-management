import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentFormComponent } from './investment-form.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';

const routes: Routes = [{ path: '', component: InvestmentFormComponent },
  { path: 'invDetails', component: InvestmentDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentFormRoutingModule { }
