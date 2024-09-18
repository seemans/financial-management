import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'investment', loadChildren: () => import('./investment-form/investment-form.module').then(m => m.InvestmentFormModule) },
  { path: 'performance-reports', loadChildren: () => import('./performance-reports/performance-reports.module').then(m => m.PerformanceReportsModule) }, 
  { path: 'recommendations', loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
