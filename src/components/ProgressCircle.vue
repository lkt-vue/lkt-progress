<script setup lang="ts">
import {computed, onMounted, Ref, ref, useSlots, watch} from 'vue';
import {ProgressTextSlot} from "lkt-vue-kernel";
import {ProgressCircleProps} from "../props/ProgressCircleProps";
import {doProgressAnimation, doStopProgressAnimation} from "../functions/animation";

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

let animationId: Ref<number | null> = ref(null);
const paused = ref(false);

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
    paused.value = false;
    animationId = doProgressAnimation({
        duration: duration.value,
        animation: props.animation,
        paused: paused.value,
        current: currentProgress,
        target: props.target,
        events: {
            onAnimatedFrame: () => {
                emit('progress-updated', currentProgress.value)
            },
            onAnimationEnd: props.events.onEnd
        }
    })
}

function pauseAnimation() {
    paused.value = true;
    doStopProgressAnimation(animationId);
}

const computedDirectionStyles = computed(() => {
    if (props.direction === 'left') return `rotate(-180 ${center.value} ${center.value}) scale(-1,1) translate(-${size.value} 0)`;
    return '';
})

watch(() => props.progress, (newVal) => {
    pauseAnimation();
    animateProgress();
}, { immediate: true });

watch(() => props.duration, (newVal) => {
    duration.value = newVal;
}, { immediate: true });

watch(() => props.hasHover, (hasHover: boolean) => {
    if (props.pauseOnHover) {
        if (hasHover) {
            pauseAnimation();
        } else if (currentProgress.value !== props.target) {
            paused.value = false;
            animateProgress()
        }
    }
})

defineExpose({
    pause: () => {
        pauseAnimation();
    },
    start: () => {
        animateProgress();
    },
})

onMounted(() => {
    if (props.animation.autoplay) {
        animateProgress()
    }
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
