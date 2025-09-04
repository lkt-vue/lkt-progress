<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {getVisiblePercentage} from "../functions/functions";
import {ProgressAnimation} from "lkt-vue-kernel";
import {ProgressBarProps} from "../props/ProgressBarProps";

const props = withDefaults(defineProps<ProgressBarProps>(), {
    duration: 1000,
    direction: 'right',
});

const currentProgress = ref(props.progress);
const duration = ref(props.duration ?? 1000);

let animationId: number | null = null;

const emit = defineEmits(['progress-updated']);

const
    computedVisiblePercentage = computed(() => {
        return getVisiblePercentage(currentProgress.value, props.valueFormat);
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedVisiblePercentage.value + '%)';
    });

function animateProgress(target: number) {
    const start = currentProgress.value;
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
        emit('progress-updated', currentProgress.value)
        if (progress < 1) animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
}

function pauseAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}



watch(() => props.progress, (newVal) => {
    animateProgress(newVal);
}, { immediate: true });

watch(() => props.hasHover, (hasHover: boolean) => {
    if (props.pauseOnHover) {

        if (hasHover) {
            pauseAnimation();
        } else {
            animateProgress(props.progress)
        }
    }
})
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