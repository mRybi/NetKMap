import { Point } from './point';

export interface DataPolygon {
    polygonIndex: number;
    points: Point[];
    info: string;
    photo: string; // url
    category: string;
    color: string;
}
