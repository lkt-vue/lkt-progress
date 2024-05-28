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

        return r.join(' ');
    }),
    computedPercentage = computed(() => {
        if (props.modelValue > 100) return 100;
        if (props.modelValue < 0) return 0;
        return Number(props.modelValue).toFixed(2);
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