import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
  { path: 'PortfolioOverview', component: PortfolioOverviewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
