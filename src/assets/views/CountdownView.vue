<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useViewStore } from '@/stores/view';
import BaseView from './BaseView.vue';
import ProgressBar from '../components/ProgressBar.vue';
import { useInputStore } from '@/stores/input';
import { useGameStore } from '@/stores/game';

const time = 3000;

let timeout = 0;

const view = useViewStore();
const progressRef = ref<typeof ProgressBar>();
const timeText = ref<string>(Math.floor(time / 1000).toString());
const input = useInputStore();
const game = useGameStore();

onMounted(() => {
  progressRef.value?.startCountdown(time);

  let interval = setInterval(() => timeText.value = Math.ceil((progressRef.value!.getEndTime() - performance.now()) / 1000).toString(), 100);
  timeout = setTimeout(() => clearInterval(interval), time);

  input.events = {
    up: () => { },
    right: () => { },
    down: () => { },
    left: () => { },
    a: () => { },
    home: () => {
      game.$reset();
      view.state = "title";
    },
  };
});

onUnmounted(() => {
  clearTimeout(timeout);
});
</script>

<template>
  <BaseView :class="$style.view">
    <ProgressBar ref="progressRef" @timeout="view.state = 'game';" />
    <span :class="$style.count">{{ timeText }}</span>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding-block: 2em;

  height: 100%;
}

.count {
  font-size: 6em;
  font-weight: bold;
  color: var(--c-primary);

  flex: 1;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
