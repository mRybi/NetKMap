import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { DataPoint } from '../_models/dataPoint';
import { DataFinder } from '../_models/dataFinder';
import { DataPolygon } from '../_models/dataPolygon';
import { DataService } from '../_services/data.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
   categoriesSorted: string[] = new Array();

  constructor(private dataService: DataService) { }

  ngOnInit() {

    console.log(this.dataPoints.length);
  }

  ngOnChanges() {
    this.retiveCategories();
    this.categoriesSorted = this.categories.filter( this.onlyUnique );
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
isChecked(event: MatCheckboxChange, cat: string) {
  console.log(cat);
  if (event.checked === true) {
    console.log(cat);
    this.dataService.setCategory(cat);
  } else {
    event.checked = false;
    this.dataService.dropCategory(cat);
  }

}

  refresh(cat: any) {
    this.dataService.setCategory(cat);
    console.log(this.dataService.category);
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
