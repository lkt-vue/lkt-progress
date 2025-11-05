<script setup lang="ts">
import {computed, onMounted, Ref, ref, useSlots, watch} from "vue";
import {ProgressTextSlot} from "lkt-vue-kernel";
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

const emit = defineEmits(['progress-updated']);
const slots = useSlots();

const progressBarStyles = computed(() => {

    let r = [];
    r.push(`transition: all linear ${duration.value}ms`);
    r.push(`width: ${currentProgress.value}%`);

    return r.join(';');
});

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
});

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
        animateProgress();
        console.log('mounted bar: ', {

            duration: duration.value,
            animation: props.animation,
            paused: paused.value,
            current: currentProgress.value,
            target: props.target,
        }
    )
    }
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