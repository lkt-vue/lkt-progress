<script setup lang="ts">
import {computed, Ref, ref, useSlots, watch} from "vue";
import {ProgressAnimation, ProgressTextSlot} from "lkt-vue-kernel";
import {ProgressBarProps} from "../props/ProgressBarProps";
import {doProgressAnimation, doStopProgressAnimation} from "../functions/animation";

const props = withDefaults(defineProps<ProgressBarProps>(), {
    duration: 1000,
    direction: 'right',
});

const currentProgress = ref(props.progress);
const duration = ref(props.duration ?? 1000);

let animationId: Ref<number | null> = ref(null);
const paused = ref(false);

const animationLimit = computed(() => {
    if (props.animation.externalControl) {
        if (isNaN(props.progress)) return 100;
        return props.progress;
    }
    return props.animation.type === ProgressAnimation.Incremental ? props.progressHigherLimit : props.progressLowerLimit;
});

const emit = defineEmits(['progress-updated']);
const slots = useSlots();

const progressBarStyles = computed(() => {

    let r = [];
    r.push(`transition: all linear ${duration.value}ms`);
    r.push(`width: ${currentProgress.value}%`);

    return r.join(';');
});

function animateProgress() {
    animationId = doProgressAnimation({
        duration: duration.value,
        animation: props.animation,
        paused: paused.value,
        current: currentProgress,
        target: animationLimit.value,
        events: {
            onAnimatedFrame: () => {
                emit('progress-updated', currentProgress.value)
            }
        }
    })
}

function pauseAnimation() {
    doStopProgressAnimation(animationId);
}

watch(() => props.progress, (newVal) => {
    animateProgress();
}, { immediate: true });

watch(() => props.duration, (newVal) => {
    duration.value = newVal;
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
    <div class="lkt-progress--content">
        <div class="lkt-progress--bar">
            <div class="lkt-progress--bar-percentage"
                 :style="progressBarStyles"
                 role="progressbar"
                 :aria-valuenow="text"
                 :aria-valuemin="0"
                 :aria-valuemax="100"/>
        </div>
        <div class="lkt-progress--indicator" v-if="slots.text">
            <slot name="text" v-bind="<ProgressTextSlot>{
                text,
                progress: currentProgress,
                unit,
            }"/>
        </div>
        <div v-else-if="valueFormat !== 'hidden'" class="lkt-progress--indicator">{{ text }}</div>
    </div>
</template>