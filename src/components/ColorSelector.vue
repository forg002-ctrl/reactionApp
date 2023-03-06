<script setup lang="ts">
import { ref, defineEmits } from 'vue';

interface IEmits {
    (eventName: 'color-select', color: string): void;
}
const emits = defineEmits<IEmits>();

let isSelected = ref(false);

function selectColor(color: string) {
    emits('color-select', color);
}

</script>
<template>
    <h6 class="text-h2 text-center q-pt-md">
        {{ `Select the color` }}
    </h6>
    <div class="q-pa-lg" style="display:flex; justify-content: center;">
        <div class="row q-gutter-xl">
            <q-btn
                v-model="isSelected"
                padding="75px"
                rounded color="green"
                @click="selectColor('green')"
            />
            <q-btn
                v-model="isSelected"
                padding="75px"
                rounded color="yellow"
                @click="selectColor('yellow')"
            />
            <q-btn
                v-model="isSelected"
                padding="75px"
                rounded color="red"
                @click="selectColor('red')"
            />
        </div>
    </div>
</template>
