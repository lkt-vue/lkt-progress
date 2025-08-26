<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from "vue";
import {
    getDefaultValues,
    Progress, ProgressAnimation,
    ProgressConfig,
    ProgressType
} from "lkt-vue-kernel";
import ProgressCircle from "@/components/ProgressCircle.vue";
import {getVisiblePercentage} from "@/functions/functions";

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
    if (props.animation === ProgressAnimation.Decremental && progress.value > 0) {
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
    if (props.animation === ProgressAnimation.Incremental || props.animation === ProgressAnimation.Decremental) {
        if (isAnimating.value) return;
        intervalId = setInterval(updateProgress, 100); // Update each 100 ms
        isAnimating.value = true;
    }
}

function pauseProgress() {
    clearInterval(intervalId);
    isAnimating.value = false;
}

const classes = computed(() => {
        let r = [];

        if (props.type === ProgressType.Circle) r.push('is-circle');
        if (props.type === ProgressType.Bar) r.push('is-bar');
        if (progress.value >= 10) r.push('lkt-progress--fill-10');
        if (progress.value >= 20) r.push('lkt-progress--fill-20');
        if (progress.value >= 30) r.push('lkt-progress--fill-30');
        if (progress.value >= 40) r.push('lkt-progress--fill-40');
        if (progress.value >= 50) r.push('lkt-progress--fill-50');
        if (progress.value >= 60) r.push('lkt-progress--fill-60');
        if (progress.value >= 70) r.push('lkt-progress--fill-70');
        if (progress.value >= 80) r.push('lkt-progress--fill-80');
        if (progress.value >= 90) r.push('lkt-progress--fill-90');
        if (progress.value >= 100) r.push('lkt-progress--fill-100');

        return r.join(' ');
    }),
    computedVisiblePercentage = computed(() => {
        return getVisiblePercentage(progress.value, props.valueFormat);
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedVisiblePercentage.value + '%)';
    }),
    computedProgressCircleStyles = computed(() => {

        let degrees = (props.modelValue)/100;

        return `--lkt-progress--percent: ${degrees};`
    });

const onMouseEnter = (event: MouseEvent) => {
        if (props.pauseOnHover) {
            pauseProgress();
        }
        emit('mouseenter', event);
    },
    onMouseLeave = (event: MouseEvent) => {
        if (props.pauseOnHover) {
            startProgress();
        }
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

        <div v-if="type === ProgressType.Circle"  class="lkt-progress-content" :style="computedProgressCircleStyles">
            <progress-circle
                :progress="progress"
                :size="circleWidth"
                :ball-radius="ballRadius"
                :stroke-width="strokeWidth"
                :duration="duration"
                :direction="direction"
            />
        </div>

        <div v-else class="lkt-progress-content">
            <div class="lkt-progress-bar">
                <div class="lkt-progress-bar-percentage"
                     :style="progressBarStyles"
                     role="progressbar"
                     :aria-valuenow="computedVisiblePercentage"
                     :aria-valuemin="0"
                     :aria-valuemax="100"/>
            </div>
            <div v-if="valueFormat !== 'hidden'" class="lkt-progress-indicator">{{ computedVisiblePercentage }}%</div>
        </div>
    </section>
</template>