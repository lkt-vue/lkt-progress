<script setup lang="ts">
import {computed, ref, useSlots, watch} from "vue";
import {
    getDefaultValues,
    Progress,
    ProgressAnimation,
    ProgressConfig,
    ProgressTextSlot,
    ProgressType
} from "lkt-vue-kernel";
import ProgressCircle from "../components/ProgressCircle.vue";
import {ProgressCircleProps} from "../props/ProgressCircleProps";
import {ProgressBarProps} from "../props/ProgressBarProps";
import ProgressBar from "../components/ProgressBar.vue";
import {getFinalText, getVisiblePercentage, parseAnimationConfig} from "../functions/functions";

// Emits
const emit = defineEmits([
    'update:modelValue',
    'mouseenter',
    'mouseleave',
    'end',
])

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<ProgressConfig>(), getDefaultValues(Progress));
const animationConfig = ref(parseAnimationConfig(props.animation));

const progress = ref(Number(props.modelValue));
if (progress.value > 100) progress.value = 100;
if (progress.value < 0) progress.value = 0;

const progressHigherLimit = ref(100);
if (animationConfig.value.type === ProgressAnimation.Incremental) {
    progressHigherLimit.value = progress.value;
    progress.value = 0;
}

const progressLowerLimit = ref(0);
if (animationConfig.value.type === ProgressAnimation.Decremental) {
    // if (!animationConfig.value.externalControl) {
        progressLowerLimit.value = progress.value;
    // }
    progress.value = progressHigherLimit.value;
}

const hasHover = ref(false);
const progressRef = ref(null);

watch(() => props.modelValue, (v) => {
    if (v > 100) v = 100;
    if (v < 0) v = 0;
    progress.value = v;
});

watch(progress, (v) => {
    emit('update:modelValue', v);
})

const calculatedProgress = ref(progress.value);
const updateCalculatedProgress = (n:number) => calculatedProgress.value = n;

const classes = computed(() => {
        let r = ['lkt-progress--fill-0'];

        if (props.type === ProgressType.Circle) r.push('is-circle');
        if (props.type === ProgressType.Bar) r.push('is-bar');
        const p = props.type === ProgressType.Bar ? progress.value : calculatedProgress.value;

        if (p >= 10) r.push('lkt-progress--fill-10');
        if (p >= 20) r.push('lkt-progress--fill-20');
        if (p >= 30) r.push('lkt-progress--fill-30');
        if (p >= 40) r.push('lkt-progress--fill-40');
        if (p >= 50) r.push('lkt-progress--fill-50');
        if (p >= 60) r.push('lkt-progress--fill-60');
        if (p >= 70) r.push('lkt-progress--fill-70');
        if (p >= 80) r.push('lkt-progress--fill-80');
        if (p >= 90) r.push('lkt-progress--fill-90');
        if (p >= 100) r.push('lkt-progress--fill-100');

        return r.join(' ');
    });

const onMouseEnter = (event: MouseEvent) => {
        hasHover.value = true;
        emit('mouseenter', event);
    },
    onMouseLeave = (event: MouseEvent) => {
        hasHover.value = false;
        emit('mouseleave', event);
    };

const circleRadius = ref(props.circle?.radius ?? 50);
const ballRadius = ref(props.circle?.ball?.radius ?? 50);
const strokeWidth = ref(props.circle?.track?.width ?? 10);
const circleWidth = ref(circleRadius.value * 2);

const computedVisiblePercentage = computed(() => {
    const r = getFinalText(getVisiblePercentage(calculatedProgress.value, props.valueFormat), props.unit);
    switch (typeof props.text) {
        case 'undefined':
            return r;

        case 'function':
            return props.text(r);

        default:
            return props.text;
    }
});

defineExpose({
    pause: () => {
        //@ts-ignore
        if (progressRef.value) progressRef.value.pause();
    },
    start: () => {
        //@ts-ignore
        if (progressRef.value) progressRef.value.start();
    },
})
</script>

<template>
    <section
        class="lkt-progress"
        :class="classes"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">

        <lkt-header v-if="header?.text || slots.header" v-bind="header" class="lkt-progress--header">
            <template v-if="slots.header" #text>
                <slot name="header" />
            </template>
        </lkt-header>


        <div class="lkt-progress--content">
            <progress-circle
                v-if="type === ProgressType.Circle"
                ref="progressRef"
                v-bind="<ProgressCircleProps>{
                    progress,
                    progressHigherLimit,
                    progressLowerLimit,
                    unit,
                    text: computedVisiblePercentage,
                    animation: animationConfig,
                    size: circleWidth,
                    ballRadius,
                    strokeWidth,
                    duration,
                    direction,
                    valueFormat,
                    pauseOnHover,
                    hasHover,
                }"
                @progress-updated="updateCalculatedProgress"
            >
                <template #text="{text, progress, unit}" v-if="slots.text">
                    <slot name="text" v-bind="<ProgressTextSlot>{
                        text,
                        progress,
                        unit,
                    }"/>
                </template>
            </progress-circle>

            <progress-bar
                v-else-if="type === ProgressType.Bar"
                ref="progressRef"
                v-bind="<ProgressBarProps>{
                    progress,
                    progressHigherLimit,
                    progressLowerLimit,
                    text: computedVisiblePercentage,
                    unit,
                    animation: animationConfig,
                    size: circleWidth,
                    ballRadius,
                    strokeWidth,
                    duration,
                    direction,
                    valueFormat,
                    pauseOnHover,
                    hasHover
                }"
                @progress-updated="updateCalculatedProgress"
            >
                <template #text="{text, progress, unit}" v-if="slots.text">
                    <slot name="text" v-bind="<ProgressTextSlot>{
                        text,
                        progress,
                        unit,
                    }"/>
                </template>
            </progress-bar>
        </div>
    </section>
</template>