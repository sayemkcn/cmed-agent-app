import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor( ) { }

  month: string;
  low: number;
  normal: number;
  prehyper_tension: number;
  high: number;
  mid_high:number;
  moderate_high: number;
  severe_high:number;
}

let chartsInfo: any[]  = [{
  month: "Oct",
  low: 30,
  normal: 50,
  prehyper_tension: 13,
  high: 12,
  mid_high:15,
  moderate_high: 4,
  severe_high:15
}, {
  month: "Nov",
  low: 10,
  normal: 35,
  prehyper_tension: 20,
  high: 23,
  mid_high:21,
  moderate_high: 22,
  severe_high:14
}, {
  month: "Dec",
  low: 18,
  normal: 25,
  prehyper_tension: 17,
  high: 23,
  mid_high:12,
  moderate_high: 8,
  severe_high:7
}, {
  month: "Jan",
  low: 24,
  normal: 32,
  prehyper_tension: 6,
  high: 14,
  mid_high:11,
  moderate_high: 5,
  severe_high:14
}, {
  month: "Feb",
  low: 37,
  normal: 40,
  prehyper_tension: 12,
  high: 5,
  mid_high:18,
  moderate_high: 5,
  severe_high:8
}, {
  month: "Mar",
  low: 12,
  normal: 65,
  prehyper_tension: 21,
  high: 13,
  mid_high:10,
  moderate_high: 8,
  severe_high:8
}];

@Injectable()
export class Service {
  getChartsInfo(): ChartDataService[] {
    return chartsInfo;
  }
}
