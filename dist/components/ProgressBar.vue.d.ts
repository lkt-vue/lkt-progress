import { ProgressAnimation, ProgressValueFormat } from "lkt-vue-kernel";
interface Props {
    animation: ProgressAnimation;
    progress: number;
    progressHigherLimit: number;
    progressLowerLimit: number;
    duration?: number;
    direction?: 'right' | 'left';
    valueFormat: ProgressValueFormat;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    direction: "right" | "left";
    duration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
