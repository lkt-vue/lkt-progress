<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from "vue";
import {getDefaultValues, Progress, ProgressConfig, ProgressType, ProgressValueFormat} from "lkt-vue-kernel";

// Emits
const emit = defineEmits([
    'update:modelValue',
    'mouseenter',
    'mouseleave',
    'end',
])

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<ProgressConfig>(), getDefaultValues(Progress));

const progress = ref(Number(props.modelValue));
if (progress.value > 100) progress.value = 100;
if (progress.value < 0) progress.value = 0;

const progressHigherLimit = ref(100);
if (props.type === ProgressType.Incremental) {
    progressHigherLimit.value = progress.value;
    progress.value = 0;
}

watch(() => props.modelValue, (v) => {
    if (v > 100) v = 100;
    if (v < 0) v = 0;
    progress.value = v;
});

watch(progress, (v) => {
    emit('update:modelValue', v);
})

const isAnimating = ref(false);
let intervalId: any;
const progressDuration = ref(props.duration);
const animationStep = ref(progressDuration.value === 0 ? 1 : (100 / (progressDuration.value / 100)));

function updateProgress() {
    if (props.type === ProgressType.Decremental && progress.value > 0) {
        progress.value -= animationStep.value;

    } else if (props.type === ProgressType.Incremental && progress.value < progressHigherLimit.value) {
        progress.value += animationStep.value;

    } else {
        clearInterval(intervalId);
        isAnimating.value = false;
        emit('end');
    }
}

function startProgress() {
    if (props.type === ProgressType.Incremental || props.type === ProgressType.Decremental) {
        if (isAnimating.value) return;
        intervalId = setInterval(updateProgress, 100); // Actualización cada 100 ms
        isAnimating.value = true;
    }
}

// Función para pausar el progreso
function pauseProgress() {
    clearInterval(intervalId);
    isAnimating.value = false;
}

const classes = computed(() => {
        let r = [];

        if (props.palette) r.push(`lkt-progress--${props.palette}`);

        if (progress.value >= 10) r.push('lkt-progress--fill-10');
        if (progress.value >= 20) r.push('lkt-progress--fill-20');
        if (progress.value >= 30) r.push('lkt-progress--fill-30');
        if (progress.value >= 40) r.push('lkt-progress--fill-40');
        if (progress.value >= 50) r.push('lkt-progress--fill-50');
        if (progress.value >= 60) r.push('lkt-progress--fill-60');
        if (progress.value >= 70) r.push('lkt-progress--fill-70');
        if (progress.value >= 80) r.push('lkt-progress--fill-80');
        if (progress.value >= 90) r.push('lkt-progress--fill-90');
        if (progress.value >= 100) r.push('lkt-progress--fill-100');

        return r.join(' ');
    }),
    computedVisiblePercentage = computed(() => {
        let r = Number(progress.value).toFixed(2);
        if (props.valueFormat === ProgressValueFormat.Auto) {
            if (r.indexOf('.00') > -1) r = r.replace('.00', '');
        }
        else if (props.valueFormat === ProgressValueFormat.Integer) {
            //@ts-ignore
            r = parseInt(r);
        }
        return r;
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedVisiblePercentage.value + '%)';
    });

const onMouseEnter = (event: MouseEvent) => {
        if (props.pauseOnHover) {
            pauseProgress();
        }
        emit('mouseenter', event);
    },
    onMouseLeave = (event: MouseEvent) => {
        if (props.pauseOnHover) {
            startProgress();
        }
        emit('mouseleave', event);
    };

onMounted(() => {
    startProgress();
})

defineExpose({
    start: startProgress,
    pause: pauseProgress,
})
</script>

<template>
    <section
        class="lkt-progress"
        :class="classes"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <header class="lkt-progress-header">
            <template v-if="!!slots.header">
                <slot name="header"/>
            </template>
            <template v-else>
                {{ header }}
            </template>
        </header>
        <div class="lkt-progress-content">
            <div class="lkt-progress-bar">
                <div class="lkt-progress-bar-percentage" :style="progressBarStyles"></div>
            </div>
            <div v-if="valueFormat !== 'hidden'" class="lkt-progress-indicator">{{ computedVisiblePercentage }}%</div>
        </div>
    </section>
</template>