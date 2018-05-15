// Component:
// 1. OnInit() getting data from dataService.
// 2. polyClicked() makes sure that wanted polygon info is displayed.
import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Point } from '../app/_models/point';
import { DataPolygon } from './_models/dataPolygon';
import { DataPoint } from './_models/dataPoint';
import { AgmInfoWindow, InfoWindowManager } from '@agm/core';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

constructor(private dataService: DataService) {}

  data: DataService = this.dataService; // variable that stores data from dataService
  indexPoly: number;
  IsPolyClicked = false;
  title = 'Net Koncept Map';
  mapType = 'hybrid';
  startLat = 50.671484;
  startLng = 17.926861;

  ngOnInit() {
    this.dataService.getJSONDataAsync('../assets/dane.json').then(data => {
      this.dataService.SetQueryOptionsData(data);
    });
  }

  polyClicked (index: number, polygon, infoWindow: AgmInfoWindow) {
    if (infoWindow.isOpen && index === polygon.polygonIndex) {
        // close the window if it's already open and we're clicking the same polygon again
        infoWindow.isOpen = false;
    } else {
        // otherwise open it and save the index of the clicked polygon
        this.indexPoly = index;
        infoWindow.isOpen = true;
    }
  }
}
