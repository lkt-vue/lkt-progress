import {ProgressAnimationConfig, ProgressEvents, ProgressValueFormat, UnitConfig} from "lkt-vue-kernel";

export interface ProgressCircleProps {
    animation: ProgressAnimationConfig
    progress: number
    text: string
    target: number
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
    events: ProgressEvents
}