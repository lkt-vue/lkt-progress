import { ProgressAnimation, ProgressConfig, ProgressType } from "lkt-vue-kernel";
import ProgressCircle from "../components/ProgressCircle.vue";
import ProgressBar from "../components/ProgressBar.vue";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const animationConfig: import("vue").Ref<{
    type: ProgressAnimation;
    autoplay: boolean;
    externalControl: boolean;
}, import("lkt-vue-kernel").ProgressAnimationConfig | {
    type: ProgressAnimation;
    autoplay: boolean;
    externalControl: boolean;
}>;
declare const progress: import("vue").Ref<number, number>;
declare const progressHigherLimit: import("vue").Ref<number, number>;
declare const progressLowerLimit: import("vue").Ref<number, number>;
declare const hasHover: import("vue").Ref<boolean, boolean>;
declare const progressRef: import("vue").Ref<null, null>;
declare const updateCalculatedProgress: (n: number) => number;
declare const classes: import("vue").ComputedRef<string>;
declare const onMouseEnter: (event: MouseEvent) => void, onMouseLeave: (event: MouseEvent) => void;
declare const ballRadius: import("vue").Ref<number, number>;
declare const strokeWidth: import("vue").Ref<number, number>;
declare const circleWidth: import("vue").Ref<number, number>;
declare const computedVisiblePercentage: import("vue").ComputedRef<any>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_5: {}, __VLS_16: {
    text: string;
    progress: number;
    unit?: import("lkt-vue-kernel").UnitConfig;
}, __VLS_27: {
    text: string;
    progress: number;
    unit?: import("lkt-vue-kernel").UnitConfig;
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    header?: (props: typeof __VLS_5) => any;
} & {
    text?: (props: typeof __VLS_16) => any;
} & {
    text?: (props: typeof __VLS_27) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<ProgressConfig, {
    ProgressType: typeof ProgressType;
    ProgressCircle: typeof ProgressCircle;
    ProgressBar: typeof ProgressBar;
    slots: typeof slots;
    animationConfig: typeof animationConfig;
    progress: typeof progress;
    progressHigherLimit: typeof progressHigherLimit;
    progressLowerLimit: typeof progressLowerLimit;
    hasHover: typeof hasHover;
    progressRef: typeof progressRef;
    updateCalculatedProgress: typeof updateCalculatedProgress;
    classes: typeof classes;
    onMouseEnter: typeof onMouseEnter;
    onMouseLeave: typeof onMouseLeave;
    ballRadius: typeof ballRadius;
    strokeWidth: typeof strokeWidth;
    circleWidth: typeof circleWidth;
    computedVisiblePercentage: typeof computedVisiblePercentage;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    end: (...args: any[]) => void;
    mouseenter: (...args: any[]) => void;
    mouseleave: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<ProgressConfig> & Readonly<{
    onEnd?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    unit: string | import("lkt-vue-kernel").UnitConfig;
    type: ProgressType;
    animation: ProgressAnimation | import("lkt-vue-kernel").ProgressAnimationConfig;
    header: import("lkt-vue-kernel").HeaderConfig;
    circle: import("lkt-vue-kernel").CircleConfig;
    text: string | Function;
    duration: number;
    modelValue: number;
    pauseOnHover: boolean;
    valueFormat: import("lkt-vue-kernel").ProgressValueFormat;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<ProgressConfig, {
    pause: () => void;
    start: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    end: (...args: any[]) => void;
    mouseenter: (...args: any[]) => void;
    mouseleave: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<ProgressConfig> & Readonly<{
    onEnd?: ((...args: any[]) => any) | undefined;
    onMouseenter?: ((...args: any[]) => any) | undefined;
    onMouseleave?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    unit: string | import("lkt-vue-kernel").UnitConfig;
    type: ProgressType;
    animation: ProgressAnimation | import("lkt-vue-kernel").ProgressAnimationConfig;
    header: import("lkt-vue-kernel").HeaderConfig;
    circle: import("lkt-vue-kernel").CircleConfig;
    text: string | Function;
    duration: number;
    modelValue: number;
    pauseOnHover: boolean;
    valueFormat: import("lkt-vue-kernel").ProgressValueFormat;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
