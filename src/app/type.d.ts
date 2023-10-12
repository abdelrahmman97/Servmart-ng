import { DefaultArcObject } from "d3-shape";

declare module 'd3-shape';
declare module 'd3-scale';
declare module 'd3-selection';

export interface PieData extends DefaultArcObject {
    label?: string; // Example property for pie slice label
    color?: string; // Example property for pie slice color
    // ... any other properties specific to your PieData
  }