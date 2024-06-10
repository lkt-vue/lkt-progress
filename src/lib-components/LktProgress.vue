<script setup lang="ts">
import {computed, useSlots} from "vue";

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    modelValue: number
    header: string
    palette: string
}>(), {
    modelValue: 0,
    header: '',
    palette: '',
});

const classes = computed(() => {
        let r = [];

        if (props.palette) r.push(`lkt-progress--${props.palette}`);

        if (computedPercentage.value >= 10) r.push('lkt-progress--fill-10');
        if (computedPercentage.value >= 20) r.push('lkt-progress--fill-20');
        if (computedPercentage.value >= 30) r.push('lkt-progress--fill-30');
        if (computedPercentage.value >= 40) r.push('lkt-progress--fill-40');
        if (computedPercentage.value >= 50) r.push('lkt-progress--fill-50');
        if (computedPercentage.value >= 60) r.push('lkt-progress--fill-60');
        if (computedPercentage.value >= 70) r.push('lkt-progress--fill-70');
        if (computedPercentage.value >= 80) r.push('lkt-progress--fill-80');
        if (computedPercentage.value >= 90) r.push('lkt-progress--fill-90');
        if (computedPercentage.value >= 100) r.push('lkt-progress--fill-100');

        return r.join(' ');
    }),
    computedPercentage = computed(() => {
        if (props.modelValue > 100) return 100;
        if (props.modelValue < 0) return 0;
        return Number(Number(props.modelValue).toFixed(2));
    }),
    computedVisiblePercentage = computed(() => {
        return Number(props.modelValue).toFixed(2);
    }),
    progressBarStyles = computed(() => {
        return 'width: calc(' + computedPercentage.value + '%)';
    });
</script>

<template>
    <section class="lkt-progress" :class="classes">
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
            <div class="lkt-progress-indicator">{{computedVisiblePercentage}}%</div>
        </div>
    </section>
</template>

<style scoped>

</style>