import {ProgressAnimationConfig, ProgressEvents, ProgressValueFormat, UnitConfig} from "lkt-vue-kernel";

export interface ProgressBarProps {
    animation: ProgressAnimationConfig
    progress: number
    text: string
    target: number
    unit?: UnitConfig
    duration?: number
    direction?: 'right' | 'left'
    valueFormat: ProgressValueFormat
    pauseOnHover: boolean
    hasHover: boolean
    events: ProgressEvents
}