<script setup lang="ts">
import GameView from '@/assets/views/GameView.vue';
import DisconnectedView from '@/assets/views/DisconnectedView.vue';
import { useViewStore } from '@/stores/view';
import TitleView from './assets/views/TitleView.vue';
import CalibrationView from './assets/views/CalibrationView.vue';
import ResultView from './assets/views/ResultView.vue';

const view = useViewStore();
</script>

<template>
  <CalibrationView v-if="view.state === 'calibration'" />
  <TitleView v-if="view.state === 'title'" />
  <GameView v-if="view.state === 'game'" />
  <ResultView v-if="view.state === 'result'" />
  <DisconnectedView v-if="view.state === 'disconnected'" />
</template>

<style module>
</style>
