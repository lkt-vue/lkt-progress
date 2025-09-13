<script setup lang="ts">
import {computed, ref, useSlots, watch} from 'vue';
import {getAnimationDistance, getAnimationDistanceStep} from "../functions/functions";
import {ProgressAnimation, ProgressTextSlot} from "lkt-vue-kernel";
import {ProgressCircleProps} from "../props/ProgressCircleProps";

const props = withDefaults(defineProps<ProgressCircleProps>(), {
    size: 120,
    strokeWidth: 12,
    borderWidth: 2,
    duration: 1000,
    direction: 'right',
});

const currentProgress = ref(props.progress);

const emit = defineEmits(['progress-updated']);
const slots = useSlots();

const size = ref(props.size ?? 120);
const center = ref(size.value / 2);
const strokeWidth = ref(props.strokeWidth ?? 12);
const duration = ref(props.duration ?? 1000);

const radius = computed(() => (size.value - strokeWidth.value) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const offset = computed(() => circumference.value * (1 - currentProgress.value / 100));

let animationId: number | null = null;
const paused = ref(false);

let animationLimit = computed(() => {
    return props.animation.type === ProgressAnimation.Incremental ? props.progressHigherLimit : props.progressLowerLimit;
});
const animationDistance = getAnimationDistance(props.progress, props.animation.type, props.progressHigherLimit, props.progressLowerLimit);


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

function animateProgress() {

    if (paused.value) return;
    if (currentProgress.value === animationLimit.value) return;

    function animate() {
        if (paused.value || currentProgress.value === animationLimit.value) {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            return;
        }

        const progress = getAnimationDistanceStep(animationDistance, duration.value);
        if (props.animation.type === ProgressAnimation.Incremental) {
            currentProgress.value = Math.min(currentProgress.value + progress, props.progressHigherLimit);

        } else if (props.animation.type === ProgressAnimation.Decremental) {
            currentProgress.value = Math.max(currentProgress.value - progress, props.progressLowerLimit);
        }
        emit('progress-updated', currentProgress.value)
        if (currentProgress.value !== animationLimit.value) {
            animationId = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    animationId = requestAnimationFrame(animate);
}

function pauseAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        paused.value = true;
    }
}

const computedDirectionStyles = computed(() => {
    if (props.direction === 'left') return `rotate(-180 ${center.value} ${center.value}) scale(-1,1) translate(-${size.value} 0)`;
    return '';
})

watch(() => props.progress, (newVal) => {
    animateProgress();
}, { immediate: true });

watch(() => props.hasHover, (hasHover: boolean) => {
    if (props.pauseOnHover) {

        if (hasHover) {
            pauseAnimation();
        } else if (currentProgress.value !== animationLimit.value) {
            paused.value = false;
            animateProgress()
        }
    }
})

defineExpose({
    pause: () => {
        paused.value = true;
    },
    start: () => {
        paused.value = false;
        animateProgress();
    },
})
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
        <div class="lkt-progress--indicator" v-if="slots.text">
            <slot name="text" v-bind="<ProgressTextSlot>{
                text,
                progress: currentProgress,
                unit,
            }"/>
        </div>
        <div v-else class="lkt-progress--indicator">{{ text }}</div>
    </div>
</template>
