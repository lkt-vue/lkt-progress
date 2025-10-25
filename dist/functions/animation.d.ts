import { ProgressAnimationConfig } from "lkt-vue-kernel";
import { Ref } from "vue";
export declare const doProgressAnimation: (args: {
    duration: number;
    animation: ProgressAnimationConfig;
    paused: boolean;
    current: Ref<number>;
    target: number;
    events: {
        onAnimatedFrame: Function;
    };
}) => undefined | Ref<number | null>;
export declare const doStopProgressAnimation: (animationId: Ref<number | null>) => void;
