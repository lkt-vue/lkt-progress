<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {getAnimationDistance, getAnimationDistanceStep, getVisiblePercentage} from "../functions/functions";
import {ProgressAnimation} from "lkt-vue-kernel";
import {ProgressBarProps} from "../props/ProgressBarProps";

const props = withDefaults(defineProps<ProgressBarProps>(), {
    duration: 1000,
    direction: 'right',
});

const currentProgress = ref(props.progress);
const duration = ref(props.duration ?? 1000);

let animationId: number | null = null;
const paused = ref(false);

let animationLimit = computed(() => {
    return props.animation === ProgressAnimation.Incremental ? props.progressHigherLimit : props.progressLowerLimit;
});
const animationDistance = getAnimationDistance(props.progress, props.animation, props.progressHigherLimit, props.progressLowerLimit);

const emit = defineEmits(['progress-updated']);

const
    computedVisiblePercentage = computed(() => {
        return getVisiblePercentage(currentProgress.value, props.valueFormat);
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedVisiblePercentage.value + '%)';
    });

function animateProgress() {

    if (paused.value) return;
    if (currentProgress.value === animationLimit.value) return;

    function animate(time: number) {
        if (paused.value || currentProgress.value === animationLimit.value) {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            return;
        }

        const progress = getAnimationDistanceStep(animationDistance, duration.value);
        if (props.animation === ProgressAnimation.Incremental) {
            currentProgress.value = Math.min(currentProgress.value + progress, props.progressHigherLimit);

        } else if (props.animation === ProgressAnimation.Decremental) {
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
});
</script>

<template>
    <div class="lkt-progress-content">
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
</template>