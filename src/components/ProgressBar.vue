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

const emit = defineEmits(['progress-updated']);

const
    computedVisiblePercentage = computed(() => {
        return getVisiblePercentage(currentProgress.value, props.valueFormat);
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedVisiblePercentage.value + '%)';
    });

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
        emit('progress-updated', currentProgress.value)
        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}



watch(() => props.progress, (newVal) => {
    animateProgress(newVal);
}, { immediate: true });
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