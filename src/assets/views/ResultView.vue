<script lang="ts" setup>
import Button from '../components/Button.vue';
import { useGameStore } from '@/stores/game';
import BaseView from './BaseView.vue';
import { useViewStore } from '@/stores/view';
import JSConfetti from 'js-confetti';
import { onMounted } from 'vue';
import { useInputStore } from '@/stores/input';

const view = useViewStore();
const game = useGameStore();
const input = useInputStore();

const jsConfetti = new JSConfetti();

let rank: 'S' | 'A' | 'B' | 'C';

switch (true) {
  case game.score >= 500:
    rank = 'S';
    break;
  case game.score >= 300:
    rank = 'A';
    break;
  case game.score >= 100:
    rank = 'B';
    break;
  default:
    rank = 'C';
    break;
}

onMounted(() => {
  jsConfetti.addConfetti({
    confettiNumber: game.score / 5,
  });

  setTimeout(() => {
    if (view.state === "result") {
      input.addEventListener("up", () => restart(), { view: "result" });
      input.addEventListener("right", () => restart(), { view: "result" });
      input.addEventListener("down", () => restart(), { view: "result" });
      input.addEventListener("left", () => restart(), { view: "result" });
    }
  }, 1000);
});

function restart() {
  jsConfetti.destroyCanvas();
  game.score = 0;
  view.state = 'title';
}
</script>

<template>
  <BaseView :class="$style.view">
    <div :class="$style.grid">
      <span>スコア</span>
      <span :class="$style.score">{{ game.score }}</span>
      <span>ランク</span>
      <span :class="[$style.rank, $style[`rank${rank}`]]">{{ rank }}</span>
    </div>
    <Button :class="$style.restart" @click="restart">タイトルに戻る</Button>
    <p>いずれかのキーを押すことでもタイトルに戻れます。</p>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.2em;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    margin-block: 2em;

    span {
      margin: auto;
      font-size: 2em;
      font-weight: bold;
    }

    .score,
    .rank {
      font-size: 5em;
    }

    .rankS, .rankA, .rankB {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .rankS {
      background-image: linear-gradient(45deg, #ff4800, #dfff00);
    }

    .rankA {
      background-image: linear-gradient(45deg, #ff4800, #ff00ff);
    }

    .rankB {
      background-image: linear-gradient(45deg, #0a5aff, #ff00ff);
    }

    .rankC {
      color: #755a10;
    }
  }

  .restart {
    margin-block: 2em;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 1em;
  }
}
</style>
