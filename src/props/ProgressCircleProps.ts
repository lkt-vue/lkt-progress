import {ProgressAnimation, ProgressValueFormat, UnitConfig} from "lkt-vue-kernel";

export interface ProgressCircleProps {
    animation: ProgressAnimation
    progress: number
    text: string
    progressHigherLimit: number
    progressLowerLimit: number
    unit?: UnitConfig
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