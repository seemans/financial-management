import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceReportsComponent } from './performance-reports.component';

const routes: Routes = [{ path: '', component: PerformanceReportsComponent },
  { path: 'performanceRp', component: PerformanceReportsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceReportsRoutingModule { }
