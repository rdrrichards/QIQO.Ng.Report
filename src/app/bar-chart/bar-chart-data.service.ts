import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarChartDataService {
  private data: ChartData[] = [
    // { label: '2020-08-01', value: 220 },
    // { label: '2020-08-02', value: 223 },
    // { label: '2020-08-03', value: 210 },
    // { label: '2020-08-04', value: 190 },
    // { label: '2020-08-05', value: 195 },
    // { label: '2020-08-06', value: 199 },
    // { label: '2020-08-07', value: 202 },
    // { label: '2020-08-08', value: 209 },
    // { label: '2020-08-09', value: 210 },
    // { label: '2020-08-10', value: 205 },
    { label: '2020-08-11', value: 222 },
    { label: '2020-08-12', value: 221 },
    { label: '2020-08-13', value: 199 },
    { label: '2020-08-14', value: 188 },
    { label: '2020-08-15', value: 175 },
    { label: '2020-08-16', value: 123 },
    { label: '2020-08-17', value: 230 },
    { label: '2020-08-18', value: 232 },
    { label: '2020-08-19', value: 223 },
    { label: '2020-08-20', value: 75 }
  ];
  constructor() { }
  getChartData(): Observable<ChartData[]> {
    return of(this.data);
  }
}

export interface ChartData {
  label: string;
  value: number;
}
