import { Component, Input, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto'; // Import Chart type

@Component({
  selector: 'app-pie-chart',
  template: '<canvas #chartCanvas></canvas>'
})
export class PieChartComponent{

}
