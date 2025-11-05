import { ProgressAnimation, ProgressAnimationConfig, ProgressValueFormat, UnitConfig } from "lkt-vue-kernel";
import { Ref } from "vue";
export declare const getVisiblePercentage: (progress: number, format: ProgressValueFormat) => string;
export declare const getFinalText: (visiblePercentage: number | string, unit?: string | UnitConfig) => string;
export declare const getAnimationDistance: (currentPercentage: number, animation: ProgressAnimation, highLimit: number, lowLimit: number) => number;
export declare const getExternalAnimationDistance: (currentPercentage: number, limit: number) => number;
export declare const getAnimationDistanceStep: (distance: number, duration: number) => number;
export declare const parseAnimationConfig: (animation: ProgressAnimation | ProgressAnimationConfig) => ProgressAnimationConfig;
export declare const calcProgressAndLimits: (progress: number, animationConfig: Ref<ProgressAnimationConfig>) => number[];
