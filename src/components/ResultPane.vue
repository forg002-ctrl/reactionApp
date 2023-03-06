<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface IProps {
    mechanicalReactionTime: number;
    generalReactionTime: number;
}
const props = defineProps<IProps>();

interface IEmits {
    (eventName: 'clear'): void;
}
const emits = defineEmits<IEmits>();

function toColorSelector(): void {
    emits('clear');
}
</script>

<template>
    <h6 class="text-h2 text-center">
        {{ `Results` }}
    </h6>
    <h6 class="text-h5 text-center">
        {{ `Mechanical Reaction Time: ${props.mechanicalReactionTime}` }}
    </h6>
    <h6 class="text-h5 text-center">
        {{ `Latent Reaction Time: ${props.generalReactionTime - props.mechanicalReactionTime}` }}
    </h6>
    <h6 class="text-h5 text-center">
        {{ `General Reaction Time: ${props.generalReactionTime}` }}
    </h6>
    <div class="q-pa-lg" style="display:flex; justify-content: center;">
        <q-btn
            label="Try one more time"
            size="lg"
            @click="toColorSelector"
        />
    </div>
</template>
