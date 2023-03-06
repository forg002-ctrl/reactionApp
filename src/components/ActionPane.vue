<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, defineProps, defineEmits, onBeforeMount } from 'vue';

const $q = useQuasar();

interface IProps {
    color: string;
}
const props = defineProps<IProps>();

interface IEmits {
    (eventName: 'show-result', generalReactionTime: number, mechanicalReactionTime: number): void;
}
const emits = defineEmits<IEmits>();

let randomDelay = ref();
let isSpacePressed = ref(false);
let showCircle = ref(false);

let dateCircleAppears = ref();
let dateSpaceKeyUp = ref();
let datef6KeyDown = ref();

onBeforeMount(() => {
    randomDelay.value = generateDelay();
    window.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            delayStart();
        }

        if (e.key === 'F6') {
            onF6KeyUp();
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === ' ') {
            onSpaceKeyUp();
        }
    });
});

function generateDelay(): number {
    return Math.floor(Math.random() * 5);
}

function delayStart(): void {
    if (!isSpacePressed.value) {
        isSpacePressed.value = true;

        setTimeout(displayCircle, randomDelay.value * 1000);
    }
}

function onSpaceKeyUp(): void {
    if (!showCircle.value) {
        $q.notify({
            type: 'negative',
            message: `Too early. Try one more time.`,
            multiLine: true,
            position: 'top-right',
        });
    } else {
        dateSpaceKeyUp.value = new Date();
    }

    isSpacePressed.value = false;
}

function onF6KeyUp(): void {
    if (showCircle.value && !isSpacePressed.value) {
        datef6KeyDown.value = new Date();
        showResults();
    }
}

function displayCircle(): void {
    if (isSpacePressed.value) {
        dateCircleAppears.value = new Date();
        showCircle.value = true;
    }
}

function showResults(): void {
    emits('show-result', datef6KeyDown.value - dateCircleAppears.value, dateSpaceKeyUp.value - dateCircleAppears.value);

    clear();
}

function clear(): void {
    dateCircleAppears.value = null as unknown as number;
    dateSpaceKeyUp.value = null as unknown as number;
    datef6KeyDown.value = null as unknown as number;
    randomDelay.value = null as unknown as number;
    isSpacePressed.value = false;
    showCircle.value = false;
}
</script>

<template>
    <h6 class="text-h2 text-center">
        {{ `Action Pane` }}
    </h6>
    <h6
        v-if="!isSpacePressed && !showCircle"
        class="text-h5 text-center"
    >
        {{ `Hold down the 'space' button before for circle appearing. Press 'f6' button after it.` }}
    </h6>
    <div v-if="showCircle" style="display:flex; justify-content: center;">
        <q-avatar :color="props.color" size="200px" />
    </div>
</template>
