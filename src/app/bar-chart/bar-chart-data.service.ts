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
  private userData: ChartData[] = [
    { label: '2020-08-01', value: 220, auditBy: 'RR1' },
    { label: '2020-08-02', value: 223, auditBy: 'RR1' },
    { label: '2020-08-03', value: 210, auditBy: 'RR1' },
    { label: '2020-08-04', value: 190, auditBy: 'RR1' },
    { label: '2020-08-05', value: 195, auditBy: 'RR3' },
    { label: '2020-08-01', value: 199, auditBy: 'RR3' },
    { label: '2020-08-02', value: 202, auditBy: 'RR3' },
    { label: '2020-08-03', value: 209, auditBy: 'RR3' },
    { label: '2020-08-04', value: 210, auditBy: 'RR2' },
    { label: '2020-08-05', value: 205, auditBy: 'RR2' },
    { label: '2020-08-01', value: 222, auditBy: 'RR2' },
    { label: '2020-08-02', value: 221, auditBy: 'RR2' },
    { label: '2020-08-03', value: 199, auditBy: 'RR2' },
    { label: '2020-08-04', value: 188, auditBy: 'RR2' },
    { label: '2020-08-05', value: 175, auditBy: 'RR1' },
    { label: '2020-08-01', value: 123, auditBy: 'RR3' },
    { label: '2020-08-02', value: 230, auditBy: 'RR1' },
    { label: '2020-08-03', value: 232, auditBy: 'RR2' },
    { label: '2020-08-04', value: 223, auditBy: 'RR1' },
    { label: '2020-08-05', value: 75, auditBy: 'RR1' }
  ];
  constructor() { }
  getChartData(): Observable<ChartData[]> {
    return of(this.data);
  }
  getUserChartData(): Observable<ChartData[]> {
    return of(this.userData);
  }
}

export interface ChartData {
  label: string;
  auditBy?: string;
  value: number;
}
