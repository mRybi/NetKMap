import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Point } from '../app/_models/point';
import { DataPolygon } from './_models/dataPolygon';
import { DataPoint } from './_models/dataPoint';
import { DataFinder } from './_models/dataFinder';
import { AgmInfoWindow, InfoWindowManager } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

constructor(private dataFinder: DataFinder) {

}
infoWindowManager: InfoWindowManager;
  infoWindow: AgmInfoWindow;
  el: ElementRef = new ElementRef('xdddddd');
  isClicked = false;
  indexPoly: number;
  IsPolyClicked = false;
  title = 'Net Koncept Map';
  dataPolygons: DataPolygon[];
  dataPoints: any[];
  lat = 50.671484;
  lng = 17.926861;
  paths: Point[] = [
    new Point(50.671484, 17.926861),
    new Point(45.671484, 16.926861),
    new Point(30.671484, 12.926861),
    new Point(77.671484, 77.926861),
    new Point(50.671484, 17.926861),
  ];

  ngOnInit() {
    this.dataFinder.getJSONDataAsync('../assets/dane.json').then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  SetQueryOptionsData(data: any) {
    this.dataPoints = data.dataPoints;
    console.log(this.dataPoints);
    this.dataPolygons = data.dataPolygons;
    console.log(this.dataPolygons);
  }

  polyClicked (index: number, polygon, infoWindow: AgmInfoWindow) {
    console.log(index, polygon, infoWindow); //  this works correctly

    // getPolygonCenter returns a LatLngLiteral from the center of a rectangle that fits the points


    if (infoWindow.isOpen && index === polygon.polygonIndex) {
        // close the window if it's already open and we're clicking the same polygon again
        infoWindow.isOpen = false;
    } else {
        // otherwise open it and save the index of the clicked polygon
        this.indexPoly = index;
        infoWindow.isOpen = true;
    }

}

  ifoC(infoWindow) {
    this.IsPolyClicked = false;
    infoWindow.isOpen = false;
  }

  closeInfoWindow() {
    this.isClicked = false;
  }

  // infowindow
  onMouseOver(infoWindow, gm) {

    if (gm.lastOpen != null) {
        gm.lastOpen.close();
    }

    gm.lastOpen = infoWindow;

    infoWindow.open();
}
}
