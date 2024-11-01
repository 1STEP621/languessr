<script lang="ts" setup>
import Button from '../components/Button.vue';
import BaseView from './BaseView.vue';
import { useViewStore } from '../../stores/view';

const view = useViewStore();
</script>

<template>
  <BaseView :class="$style.view">
    <div :class="$style.titleGroup">
      <img :class="$style.icon" src="/icon.svg" alt="logo" />
      <h1 :class="$style.title">Languessr</h1>
    </div>
    <Button :class="$style.start" @click="view.state = 'game'">スタート</Button>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.2em;

  .titleGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .icon {
      width: 20vh;
    }

    .title {
      font-weight: bold;
      font-size: 5em;
    }
  }

  .start {
    margin-block: 2em;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 1em;
  }
}
</style>
