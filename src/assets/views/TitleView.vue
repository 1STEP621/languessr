<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useGameStore } from '@/stores/game';
import Button from '../components/Button.vue';
import BaseView from './BaseView.vue';
import { useViewStore } from '@/stores/view';
import { useInputStore } from '@/stores/input';
import Difficulty from '../components/Difficulty.vue';

const view = useViewStore();
const input = useInputStore();

const difficulties = ["easy", "normal", "hard"] satisfies typeof game.difficulty[];
let difficultiesIndex = 0;

onMounted(() => {
  // NOTE: 難易度を上下で操作
  input.events = {
    up: upDifficulty,
    right: () => {},
    down: downDifficulty,
    left: () => {},
    a: startGame,
    home: () => {},
  };
});
const game = useGameStore();

function upDifficulty() {
  difficultiesIndex++;
  if (difficultiesIndex > difficulties.length - 1) difficultiesIndex = 0;
  game.difficulty = difficulties[difficultiesIndex];
}
function downDifficulty() {
  difficultiesIndex--;
  if (difficultiesIndex < 0) difficultiesIndex = difficulties.length - 1;
  game.difficulty = difficulties[difficultiesIndex];
}
function startGame() {
  view.state = "countdown";
}
</script>

<template>
  <BaseView :class="$style.view">
    <div :class="$style.titleGroup">
      <img :class="$style.icon" src="/icon.svg" alt="logo" />
      <h1 :class="$style.title">Languessr</h1>
    </div>
    <div :class="$style.difficulties">
      <Button @click="upDifficulty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
      </Button>
      <Transition>
        <Difficulty v-if="game.difficulty === 'easy'" name="かんたん" color="#293a47">
          <li>ヒントが提供されます</li>
          <li>間違えたらすぐに次の問題に進みます</li>
        </Difficulty>
        <Difficulty v-else-if="game.difficulty === 'normal'" name="ふつう" color="#514418">
          <li>ヒントが提供されます</li>
          <li>間違えても正解するまで次の問題に進みません</li>
          <li>間違えた際のポイントの減点が少なくなります</li>
        </Difficulty>
        <Difficulty v-else-if="game.difficulty === 'hard'" name="むずかしい" color="#2f0929">
          <li>ヒントは提供されません</li>
          <li>間違えても正解するまで次の問題に進みません</li>
          <li>間違えた際にポイントが減点されます</li>
        </Difficulty>
      </Transition>
      <Button @click="downDifficulty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      </Button>
    </div>
    <Button :class="$style.start" @click="startGame">決定キーでスタート</Button>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-block: 2em;
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

  .difficulties {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    padding-block: 2em;

    flex: 1;

    position: relative;

    button {
      width: 10em;
      padding-block: 0px;

      svg {
        width: 2em;
        height: 2em;
        fill: currentColor;
      }
    }
  }
  .start {
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 1em;
  }
}
</style>
