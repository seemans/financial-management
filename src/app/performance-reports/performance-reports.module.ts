import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceReportsRoutingModule } from './performance-reports-routing.module';
import { PerformanceReportsComponent } from './performance-reports.component';


@NgModule({
  declarations: [
    PerformanceReportsComponent
  ],
  imports: [
    CommonModule,
    PerformanceReportsRoutingModule
  ]
})
export class PerformanceReportsModule { }
