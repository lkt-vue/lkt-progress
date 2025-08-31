import { ProgressAnimation, ProgressValueFormat } from "lkt-vue-kernel";
export interface ProgressBarProps {
    animation: ProgressAnimation;
    progress: number;
    progressHigherLimit: number;
    progressLowerLimit: number;
    duration?: number;
    direction?: 'right' | 'left';
    valueFormat: ProgressValueFormat;
}
