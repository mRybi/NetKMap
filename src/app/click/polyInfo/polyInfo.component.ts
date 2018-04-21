import { Component, OnInit, Input } from '@angular/core';
import { DataPolygon } from '../../_models/dataPolygon';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-polyInfo',
  templateUrl: './polyInfo.component.html',
  styleUrls: ['./polyInfo.component.css']
})
export class PolyInfoComponent implements OnInit {
  @Input() poly: DataPolygon;

  constructor() { }

  ngOnInit() {
  }

}
