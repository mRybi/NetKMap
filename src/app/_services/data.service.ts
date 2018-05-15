// Service:
// 1. Retrives data from .json file with getJSONDataAsync method.
// 2. Stores categories that user wants to see via checkboxes setCategory and dropCategory
//    wanted categories are stored in category array
import { Injectable } from '@angular/core';
import { DataPolygon } from '../_models/dataPolygon';
import { DataPoint } from '../_models/dataPoint';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
    dataPolygons: DataPolygon[];
    dataPoints: DataPoint[];
    category = [''];

constructor(private http: Http) { }

setCategory(cat: string) {
    this.category.push(cat);
}

dropCategory(cat: string) {
    for (let i = 0; i < this.category.length; i++) {
        if (this.category[i] === cat) {
            this.category.splice(i, 1);
        }
    }
}

SetQueryOptionsData(data: any) {
    this.dataPoints = data.dataPoints;
    this.dataPolygons = data.dataPolygons;
  }

 getJSONDataAsync(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get(filePath).subscribe(
            response => {
                if (!response.ok) {
                    reject('Fiailed with status: ' + response.status + '\nTrying to find file at: ' + filePath);
                }
                const jsonRes = response.json();
                resolve(jsonRes);
            }
        );
    });
}
}
