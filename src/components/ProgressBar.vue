<script setup lang="ts">
import {computed, ref} from "vue";
import {getVisiblePercentage} from "@/functions/functions";
import {ProgressAnimation, ProgressValueFormat} from "lkt-vue-kernel";

interface Props {
    animation: ProgressAnimation
    progress: number
    progressHigherLimit: number
    progressLowerLimit: number
    duration?: number
    direction?: 'right' | 'left'
    valueFormat: ProgressValueFormat
}

const props = withDefaults(defineProps<Props>(), {
    duration: 1000,
    direction: 'right',
});

const currentProgress = ref(props.progress);

const
    computedVisiblePercentage = computed(() => {
        return getVisiblePercentage(currentProgress.value, props.valueFormat);
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedVisiblePercentage.value + '%)';
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