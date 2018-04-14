import { Component, OnInit, Input } from '@angular/core';
import { Point } from '../app/_models/point';
import { DataPolygon } from './_models/dataPolygon';
import { DataPoint } from './_models/dataPoint';
import { DataFinder } from './_models/dataFinder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

constructor(private dataFinder: DataFinder) {

}
  isClicked = false;
  title = 'Net Koncept Map';
  dataPolygons: any[];
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

  polyClicked(info: string) {
    alert('you have clicked polygon ' + info);
  }

  markerClicked(info: string) {
    // alert('you have clicked marker ' + info);
    this.isClicked = true;
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
