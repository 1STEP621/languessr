<script lang="ts" setup>
import { onMounted } from 'vue';
import { useGameStore } from '@/stores/game';
import Button from '../components/Button.vue';
import BaseView from './BaseView.vue';
import { useViewStore } from '@/stores/view';
import { useInputStore } from '@/stores/input';

const view = useViewStore();
const input = useInputStore();

onMounted(() => {
  input.addEventListener("a", () => view.state = "countdown", { view: "title" });
});
const game = useGameStore();
</script>

<template>
  <BaseView :class="$style.view">
    <div :class="$style.titleGroup">
      <img :class="$style.icon" src="/icon.svg" alt="logo" />
      <h1 :class="$style.title">Languessr</h1>
    </div>
    <div>
      <Button :class="$style.easy" @click="game.difficulty = 'easy'">かんたん</Button>
      <Button :class="$style.normal" @click="game.difficulty = 'normal'">ふつう</Button>
      <Button :class="$style.hard" @click="game.difficulty = 'hard'">むずかしい</Button>
    </div>
    <Button :class="$style.start" @click="view.state = 'countdown'">決定キーでスタート</Button>
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
