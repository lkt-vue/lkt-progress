<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from "vue";
import {getDefaultValues, Progress, ProgressAnimation, ProgressConfig, ProgressType} from "lkt-vue-kernel";
import ProgressCircle from "../components/ProgressCircle.vue";
import {ProgressCircleProps} from "../props/ProgressCircleProps";
import {ProgressBarProps} from "../props/ProgressBarProps";
import ProgressBar from "../components/ProgressBar.vue";

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

const progress = ref(Number(props.modelValue));
if (progress.value > 100) progress.value = 100;
if (progress.value < 0) progress.value = 0;

const progressHigherLimit = ref(100);
if (props.animation === ProgressAnimation.Incremental) {
    progressHigherLimit.value = progress.value;
    progress.value = 0;
}

const progressLowerLimit = ref(0);
if (props.animation === ProgressAnimation.Decremental) {
    progressLowerLimit.value = progress.value;
    progress.value = progressHigherLimit.value;
}

const hasHover = ref(false);

watch(() => props.modelValue, (v) => {
    if (v > 100) v = 100;
    if (v < 0) v = 0;
    progress.value = v;
});

watch(progress, (v) => {
    emit('update:modelValue', v);
})

const isAnimating = ref(false);
let intervalId: any;
const progressDuration = ref(props.duration);
const animationStep = ref(progressDuration.value === 0 ? 1 : (100 / (progressDuration.value / 100)));

function updateProgress() {
    if (props.animation === ProgressAnimation.Decremental && progress.value > progressLowerLimit.value) {
        progress.value -= animationStep.value;

    } else if (props.animation === ProgressAnimation.Incremental && progress.value < progressHigherLimit.value) {
        progress.value += animationStep.value;

    } else {
        clearInterval(intervalId);
        isAnimating.value = false;
        emit('end');
    }
}

function startProgress() {
    if (props.type === ProgressType.Bar && (props.animation === ProgressAnimation.Incremental || props.animation === ProgressAnimation.Decremental)) {
        if (isAnimating.value) return;
        intervalId = setInterval(updateProgress, 100); // Update each 100 ms
        isAnimating.value = true;
    }
}

function pauseProgress() {
    clearInterval(intervalId);
    isAnimating.value = false;
}

const circleProgress = ref(progress.value);
const updateCircleProgress = (n:number) => circleProgress.value = n;

const classes = computed(() => {
        let r = ['lkt-progress--fill-0'];

        if (props.type === ProgressType.Circle) r.push('is-circle');
        if (props.type === ProgressType.Bar) r.push('is-bar');
        const p = props.type === ProgressType.Bar ? progress.value : circleProgress.value;

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
        // if (props.pauseOnHover) {
        //     pauseProgress();
        // }
        emit('mouseenter', event);
    },
    onMouseLeave = (event: MouseEvent) => {
        hasHover.value = false;
        // if (props.pauseOnHover) {
        //     startProgress();
        // }
        emit('mouseleave', event);
    };

const circleRadius = ref(props.circle?.radius ?? 50);
const ballRadius = ref(props.circle?.ball?.radius ?? 50);
const strokeWidth = ref(props.circle?.track?.width ?? 10);
const circleWidth = ref(circleRadius.value * 2);

onMounted(() => {
    startProgress();
})

defineExpose({
    start: startProgress,
    pause: pauseProgress,
})
</script>

<template>
    <section
        class="lkt-progress"
        :class="classes"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <header class="lkt-progress-header">
            <template v-if="!!slots.header">
                <slot name="header"/>
            </template>
            <template v-else>
                {{ header }}
            </template>
        </header>

        <div v-if="type === ProgressType.Circle"  class="lkt-progress-content">
            <progress-circle
                v-bind="<ProgressCircleProps>{
                    progress,
                    progressHigherLimit,
                    progressLowerLimit,
                    animation,
                    size: circleWidth,
                    ballRadius,
                    strokeWidth,
                    duration,
                    direction,
                    valueFormat,
                    pauseOnHover,
                    hasHover
                }"
                @progress-updated="updateCircleProgress"
            />
        </div>

        <div v-else-if="type === ProgressType.Bar"  class="lkt-progress-content">
            <progress-bar
                v-bind="<ProgressBarProps>{
                    progress,
                    progressHigherLimit,
                    progressLowerLimit,
                    animation,
                    size: circleWidth,
                    ballRadius,
                    strokeWidth,
                    duration,
                    direction,
                    valueFormat,
                    pauseOnHover,
                    hasHover
                }"
                @progress-updated="updateCircleProgress"
            />
        </div>
    </section>
</template>