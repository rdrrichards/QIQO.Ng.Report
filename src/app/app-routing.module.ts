import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bar-chart', pathMatch: 'full' },
  { path: 'bar-chart', loadChildren: () => import('./bar-chart/bar-chart.module').then(m => m.BarChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
