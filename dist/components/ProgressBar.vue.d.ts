import { ProgressBarProps } from "../props/ProgressBarProps";
declare var __VLS_1: {
    text: string;
    progress: number;
    unit?: import("lkt-vue-kernel").UnitConfig;
};
type __VLS_Slots = {} & {
    text?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ProgressBarProps, {
    pause: () => void;
    start: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "progress-updated": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<ProgressBarProps> & Readonly<{
    "onProgress-updated"?: ((...args: any[]) => any) | undefined;
}>, {
    direction: "right" | "left";
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
