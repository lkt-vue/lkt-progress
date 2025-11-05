import { ProgressAnimation, ProgressConfig, ProgressType } from "lkt-vue-kernel";
declare var __VLS_5: {}, __VLS_16: {
    text: string;
    progress: number;
    unit?: import("lkt-vue-kernel").UnitConfig;
}, __VLS_27: {
    text: string;
    progress: number;
    unit?: import("lkt-vue-kernel").UnitConfig;
};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_5) => any;
} & {
    text?: (props: typeof __VLS_16) => any;
} & {
    text?: (props: typeof __VLS_27) => any;
};
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
    events: import("lkt-vue-kernel").ProgressEvents;
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
