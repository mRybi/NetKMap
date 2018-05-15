import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { DataPoint } from '../_models/dataPoint';
import { DataPolygon } from '../_models/dataPolygon';
import { DataService } from '../_services/data.service';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { CanColor } from '@angular/material/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-filterData',
  templateUrl: './filterData.component.html',
  styleUrls: ['./filterData.component.css']
})
export class FilterDataComponent implements OnChanges {
  @Input() dataPoints: DataPoint[];
  @Input() dataPolygons: DataPolygon[];

   categories: string[] = new Array();
   categoriesSorted: string[] = new Array();

  constructor(private dataService: DataService) { }

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
  retiveCategories() {

    this.dataPoints.forEach(x => {
      this.categories.push(x.category);
    });

    this.dataPolygons.forEach(x => {
      this.categories.push(x.category);
    });
   }
}
