<script setup lang="ts">
import GameView from '@/assets/views/GameView.vue';
import DisconnectedView from '@/assets/views/DisconnectedView.vue';
import { useViewStore } from './stores/view';
import TitleView from './assets/views/TitleView.vue';

const view = useViewStore();
</script>

<template>
  <TitleView v-if="view.state === 'title'" />
  <GameView v-if="view.state === 'game'" />
  <DisconnectedView v-if="view.state === 'disconnected'" />
</template>

<style module>
</style>
