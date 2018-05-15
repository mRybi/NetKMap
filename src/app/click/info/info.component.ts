// Component occures when the agm-point is clicked and shows
// a information about that point
import { Component, OnInit, Input } from '@angular/core';
import { DataPoint } from '../../_models/dataPoint';
import { DataPolygon } from '../../_models/dataPolygon';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

@Input() point: DataPoint;

  constructor() { }

  ngOnInit() {
  }

}
