import {ProgressAnimation, ProgressValueFormat} from "lkt-vue-kernel";

export interface ProgressCircleProps {
    animation: ProgressAnimation
    progress: number
    progressHigherLimit: number
    progressLowerLimit: number
    size?: number
    strokeWidth?: number
    borderWidth?: number
    duration?: number
    ballRadius?: number
    direction?: 'right' | 'left'
    valueFormat: ProgressValueFormat
    pauseOnHover: boolean
    hasHover: boolean
}