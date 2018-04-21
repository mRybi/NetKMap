import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataPoint } from '../_models/dataPoint';
import { DataFinder } from '../_models/dataFinder';
import { DataPolygon } from '../_models/dataPolygon';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-filterData',
  templateUrl: './filterData.component.html',
  styleUrls: ['./filterData.component.css']
})
export class FilterDataComponent implements OnInit, OnChanges {
  @Input() dataPoints: DataPoint[];
  @Input() dataPolygons: DataPolygon[];

   categories: string[] = new Array();

  constructor() { }

  ngOnInit() {
     // this.retiveCategories();
    console.log(this.dataPoints.length);
  }

  ngOnChanges() {
    this.retiveCategories();
    console.log(this.dataPoints.length);
  }

  retiveCategories() {

    this.dataPoints.forEach(x => {
      this.categories.push(x.category);
    });

    this.dataPolygons.forEach(x => {
      this.categories.push(x.category);
    });
   }
}
