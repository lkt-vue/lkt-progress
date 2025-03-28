import { ProgressConfig, ProgressType, ProgressValueFormat } from "lkt-vue-kernel";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare function startProgress(): void;
declare function pauseProgress(): void;
declare const classes: import("vue").ComputedRef<string>, computedVisiblePercentage: import("vue").ComputedRef<string>, progressBarStyles: import("vue").ComputedRef<string>;
declare const onMouseEnter: (event: MouseEvent) => void, onMouseLeave: (event: MouseEvent) => void;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    header?: (props: typeof __VLS_1) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<ProgressConfig, {
    slots: typeof slots;
    classes: typeof classes;
    computedVisiblePercentage: typeof computedVisiblePercentage;
    progressBarStyles: typeof progressBarStyles;
    onMouseEnter: typeof onMouseEnter;
    onMouseLeave: typeof onMouseLeave;
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
    type: ProgressType;
    header: string;
    duration: number;
    modelValue: number;
    pauseOnHover: boolean;
    valueFormat: ProgressValueFormat;
    palette: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<ProgressConfig, {
    start: typeof startProgress;
    pause: typeof pauseProgress;
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
    type: ProgressType;
    header: string;
    duration: number;
    modelValue: number;
    pauseOnHover: boolean;
    valueFormat: ProgressValueFormat;
    palette: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
