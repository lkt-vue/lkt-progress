import { Ref } from 'vue';
import { ProgressCircleProps } from "../props/ProgressCircleProps";
declare const currentProgress: Ref<number, number>;
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const size: Ref<number, number>;
declare const center: Ref<number, number>;
declare const strokeWidth: Ref<number, number>;
declare const radius: import("vue").ComputedRef<number>;
declare const circumference: import("vue").ComputedRef<number>;
declare const offset: import("vue").ComputedRef<number>;
declare const ballPos: import("vue").ComputedRef<{
    x: number;
    y: number;
}>;
declare const ballRadius: import("vue").ComputedRef<number>;
declare const ballCircumference: import("vue").ComputedRef<number>;
declare const computedDirectionStyles: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {
    text: string;
    progress: number;
    unit?: import("lkt-vue-kernel").UnitConfig;
};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    text?: (props: typeof __VLS_1) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<ProgressCircleProps, {
    currentProgress: typeof currentProgress;
    slots: typeof slots;
    size: typeof size;
    center: typeof center;
    strokeWidth: typeof strokeWidth;
    radius: typeof radius;
    circumference: typeof circumference;
    offset: typeof offset;
    ballPos: typeof ballPos;
    ballRadius: typeof ballRadius;
    ballCircumference: typeof ballCircumference;
    computedDirectionStyles: typeof computedDirectionStyles;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "progress-updated": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<ProgressCircleProps> & Readonly<{
    "onProgress-updated"?: ((...args: any[]) => any) | undefined;
}>, {
    borderWidth: number;
    direction: "right" | "left";
    strokeWidth: number;
    size: number;
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<ProgressCircleProps, {
    pause: () => void;
    start: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "progress-updated": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<ProgressCircleProps> & Readonly<{
    "onProgress-updated"?: ((...args: any[]) => any) | undefined;
}>, {
    borderWidth: number;
    direction: "right" | "left";
    strokeWidth: number;
    size: number;
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
