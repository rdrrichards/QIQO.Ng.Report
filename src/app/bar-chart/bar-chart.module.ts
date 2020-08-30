import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartRoutingModule } from './bar-chart-routing.module';
import { BarChartComponent } from './bar-chart.component';

import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    TableModule,
    BarChartRoutingModule
  ]
})
export class BarChartModule { }
