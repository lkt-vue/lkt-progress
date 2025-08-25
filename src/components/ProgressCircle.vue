<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import {getVisiblePercentage} from "@/functions/functions";
import {ProgressValueFormat} from "lkt-vue-kernel";

interface Props {
    progress: number;
    size?: number;
    strokeWidth?: number;
    duration?: number;
}

const props = defineProps<Props>();
const currentProgress = ref(0);

const size = props.size ?? 120;
const strokeWidth = props.strokeWidth ?? 12;
const duration = props.duration ?? 2000;

const radius = computed(() => (size - strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const offset = computed(() => circumference.value * (1 - currentProgress.value / 100));


const ballPos = computed(() => {
    const angle = 2 * Math.PI * (currentProgress.value / 100);
    const cx = size / 2;
    const cy = size / 2;
    const r = radius.value;
    return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
    };
});

function animateProgress(target: number) {
    const start = currentProgress.value;
    const change = target - start;
    const startTime = performance.now();

    function animate(time: number) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        currentProgress.value = start + change * progress;
        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}


const computedVisiblePercentage = computed(() => {
    return getVisiblePercentage(currentProgress.value, ProgressValueFormat.Auto);
});

watch(() => props.progress, (newVal) => {
    animateProgress(newVal);
}, { immediate: true });
</script>

<template>
    <div class="progress-circle">
        <svg class="progress-ring" :width="size" :height="size">
            <circle
                class="progress-ring__background"
                :cx="size / 2"
                :cy="size / 2"
                :r="radius"
            />
            <circle
                class="progress-ring__circle"
                :cx="size / 2"
                :cy="size / 2"
                :r="radius"
                :style="{ strokeDasharray: circumference, strokeDashoffset: offset }"
            />
            <circle
                class="progress-ring__ball"
                :cx="ballPos.x"
                :cy="ballPos.y"
                r="8"
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

.progress-ring__background {
    fill: transparent;
    stroke: #eee;
    stroke-width: 12;
}

.progress-ring__circle {
    fill: transparent;
    stroke: #4caf50;
    stroke-width: 12;
    stroke-linecap: round;
}

.progress-ring__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
}

.progress-ring__ball {
    fill: #4caf50;
}
</style>
