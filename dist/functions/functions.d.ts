import { ProgressAnimation, ProgressValueFormat } from "lkt-vue-kernel";
export declare const getVisiblePercentage: (progress: number, format: ProgressValueFormat) => string;
export declare const getAnimationDistance: (currentPercentage: number, animation: ProgressAnimation, highLimit: number, lowLimit: number) => number;
export declare const getAnimationDistanceStep: (distance: number, duration: number) => number;
