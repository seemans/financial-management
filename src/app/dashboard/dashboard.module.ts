import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    PortfolioOverviewComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
