import { Component, OnInit } from '@angular/core';
import { BarChartDataService, ChartData } from './bar-chart-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data: any;
  options: any;
  chartData$: Observable<ChartData[]>;
  userData: any[] = [];
  cols: string[] = [];
  constructor(private barChartDataService: BarChartDataService) { }
  ngOnInit(): void {
    this.chartData$ = this.barChartDataService.getChartData();
    this.barChartDataService.getChartData().subscribe(dt => {
      const lbls = dt.map(d => d.label);
      const vals = dt.map(d => d.value);
      this.data = {
        labels: lbls,
        datasets: [
            {
                label: 'Coded',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: vals
            }
        ]
      };
    });
    this.options = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };
    this.barChartDataService.getUserChartData().subscribe(data => {
      this.cols = [ 'label', ...new Set(data.map(a => a.auditBy).sort())];
      // console.log('this.cols', this.cols);
      const pivot = []; // {label: '2020-08-20', RR1: 75, RR2: 200, RR3: 175, }
      data.map(b => {
        const pRow = pivot.find(c => c.label === b.label);
        if (pRow) {
          pRow[b.auditBy] = b.value;
        } else {
          const newRow = { label: b.label };
          newRow[b.auditBy] = b.value;
          pivot.push(newRow);
        }
      });
      this.userData = pivot;
    });
  }

}
