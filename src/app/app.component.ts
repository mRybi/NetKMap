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

constructor(private dataSerice: DataService) {

}
  data: DataService = this.dataSerice;
  isClicked = false;
  indexPoly: number;
  IsPolyClicked = false;
  title = 'Net Koncept Map';
  mapType = 'hybrid';
  categories = new Array();
  lat = 50.671484;
  lng = 17.926861;


  ngOnInit() {
    this.dataSerice.getJSONDataAsync('../assets/dane.json').then(data => {
      this.dataSerice.SetQueryOptionsData(data);
    });
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
