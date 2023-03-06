<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const ColorSelector = defineAsyncComponent(() => import('@/components/ColorSelector.vue'));
const ActionPane = defineAsyncComponent(() => import('@/components/ActionPane.vue'));
const ResultPane = defineAsyncComponent(() => import('@/components/ResultPane.vue'));

let color = ref('');
let isColorSelected = ref(false);

let generalTime = ref();
let mechanicalTime = ref();

function ColorSelection(selectedColor: string): void {
    color.value = selectedColor;
    isColorSelected.value = true;
}

function showResult(generalReactionTime: number, mechanicalReactionTime: number): void {
    generalTime.value = generalReactionTime;
    mechanicalTime.value = mechanicalReactionTime;

    isColorSelected.value = false;
}

function clear(): void {
    generalTime.value = null;
    mechanicalTime.value = null;
    isColorSelected.value = false;
}
</script>
<template>
    <ColorSelector
        v-if="!isColorSelected && !generalTime && !mechanicalTime"
        @color-select="ColorSelection"
    />
    <ActionPane
        v-if="isColorSelected && !generalTime && !mechanicalTime"
        :color="color"
        @show-result="showResult"
    />
    <ResultPane
        v-if="generalTime && mechanicalTime"
        :general-reaction-time="generalTime"
        :mechanical-reaction-time="mechanicalTime"
        @clear="clear"
    />
</template>
