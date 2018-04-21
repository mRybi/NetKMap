import { Injectable } from '@angular/core';
import { DataPolygon } from '../_models/dataPolygon';
import { DataPoint } from '../_models/dataPoint';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
    dataPolygons: DataPolygon[];
    dataPoints: DataPoint[];
     // category: string[];
     category = [''];

constructor(private http: Http) { }

setCategory(cat: string) {
    console.log(cat);
    this.category.push(cat);
}

dropCategory(cat: string) {
    for (let i = 0; i < this.category.length; i++) {
        console.log(this.category.length);
        if (this.category[i] === cat) {
            this.category.splice(i, 1);
        }
    }
}

SetQueryOptionsData(data: any) {
    this.dataPoints = data.dataPoints;
    console.log(this.dataPoints);
    this.dataPolygons = data.dataPolygons;
    console.log(this.dataPolygons);
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
    }); // .catch((reason) => this.handleError(reason));
}
}
