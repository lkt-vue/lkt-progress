<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {getVisiblePercentage} from "@/functions/functions";
import {ProgressAnimation, ProgressValueFormat} from "lkt-vue-kernel";

interface Props {
    animation: ProgressAnimation
    progress: number
    progressHigherLimit: number
    progressLowerLimit: number
    size?: number
    strokeWidth?: number
    borderWidth?: number
    duration?: number
    ballRadius?: number
    direction?: 'right' | 'left'
}

const props = withDefaults(defineProps<Props>(), {
    size: 120,
    strokeWidth: 12,
    borderWidth: 2,
    duration: 1000,
    direction: 'right',
});

const currentProgress = ref(props.progress);

const size = ref(props.size ?? 120);
const center = ref(size.value / 2);
const strokeWidth = ref(props.strokeWidth ?? 12);
const duration = ref(props.duration ?? 1000);

const radius = computed(() => (size.value - strokeWidth.value) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const offset = computed(() => circumference.value * (1 - currentProgress.value / 100));


const ballPos = computed(() => {
    const angle = 2 * Math.PI * (currentProgress.value / 100);
    const cx = size.value / 2;
    const cy = size.value / 2;
    const r = radius.value;
    return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
    };
});

const ballRadius = computed(() => {
    if (props.ballRadius) return props.ballRadius;
    return ((size.value / 2) - strokeWidth.value) / 8;
});
const ballCircumference = computed(() => 2 * Math.PI * ballRadius.value);

function animateProgress(target: number) {
    const start = props.animation === ProgressAnimation.Incremental ? currentProgress.value : 100;
    const change = props.animation === ProgressAnimation.Incremental ? props.progressHigherLimit - start : start - props.progressLowerLimit;
    const startTime = performance.now();

    function animate(time: number) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration.value, 1);
        if (props.animation === ProgressAnimation.Incremental) {
            currentProgress.value = start + change * progress;

        } else if (props.animation === ProgressAnimation.Decremental) {
            currentProgress.value = start - change * progress;
        }
        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}


const computedVisiblePercentage = computed(() => {
    return getVisiblePercentage(currentProgress.value, ProgressValueFormat.Auto);
});

const computedDirectionStyles = computed(() => {
    if (props.direction === 'left') return `rotate(-180 ${center.value} ${center.value}) scale(-1,1) translate(-${size.value} 0)`;
    return '';
})

watch(() => props.progress, (newVal) => {
    animateProgress(newVal);
}, { immediate: true });
</script>

<template>
    <div class="progress-circle">
        <svg class="progress-ring" :width="size" :height="size"
             :viewBox="`0 0 ${size} ${size}`">

            <circle
                class="progress-ring--background-border"
                :cx="center"
                :cy="center"
                :r="radius"
                stroke="transparent"
                fill="transparent"
                :stroke-width="strokeWidth"
            />

            <circle
                class="progress-ring--background"
                :cx="center"
                :cy="center"
                :r="radius"
                stroke="transparent"
                fill="transparent"
                :stroke-width="strokeWidth - (2 * borderWidth)"
            />

            <circle
                class="progress-ring--circle-border"
                :cx="center"
                :cy="center"
                :r="radius"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="offset"
                stroke="transparent"
                fill="transparent"
                :stroke-width="strokeWidth"
                stroke-linecap="round"
                :transform="computedDirectionStyles"
            />

            <circle
                class="progress-ring--circle"
                :cx="center"
                :cy="center"
                :r="radius"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="offset"
                stroke="transparent"
                fill="transparent"
                :stroke-width="strokeWidth - (2 * borderWidth)"
                stroke-linecap="round"
                :transform="computedDirectionStyles"
            />

            <circle
                class="progress-ring--ball"
                :cx="ballPos.x"
                :cy="ballPos.y"
                :r="ballRadius"
                :stroke-dasharray="ballCircumference"
                :stroke-width="2"
                :transform="computedDirectionStyles"
            />

        </svg>
        <div class="progress-ring__text">{{ computedVisiblePercentage }}%</div>
    </div>
</template>

<style scoped>
.progress-circle {
    position: relative;
    display: inline-block;
}

.progress-ring {
    transform: rotate(-90deg);
    overflow: visible;
}

.progress-ring--background-border {
    fill: transparent;
    stroke: var(--lkt-progress--track--border-color);
}

.progress-ring--background {
    fill: transparent;
    stroke: var(--lkt-progress--track--background);
}

.progress-ring--circle {
    fill: transparent;
    stroke-linecap: round;
    stroke: var(--lkt-progress--circle--background);
}

.progress-ring--circle-border {
    fill: transparent;
    stroke-linecap: round;
    stroke: var(--lkt-progress--circle--border-color);
}

.progress-ring__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
}

.progress-ring--ball {
    fill: var(--lkt-progress--ball--background);
    stroke: var(--lkt-progress--ball--border-color);
    stroke-linecap: round;
}
</style>
