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
  case game.score >= 300:
    rank = 'S';
    break;
  case game.score >= 150:
    rank = 'A';
    break;
  case game.score >= 50:
    rank = 'B';
    break;
  default:
    rank = 'C';
    break;
}

onMounted(() => {
  jsConfetti.addConfetti({
    confettiNumber: Math.min(game.score / 5, 200),
  });

  input.events = {
    up() { },
    right() { },
    down() { },
    left() { },
    a() { },
  };
  setTimeout(() => {
    if (view.state === "result") {
      input.events.a = restart;
    }
  }, 1000);
});

function restart() {
  jsConfetti.destroyCanvas();
  game.score = 0;
  game.difficulty = 'easy';
  view.state = 'title';
}
</script>

<template>
  <BaseView :class="$style.view">
    <span :class="[$style.difficulty, $style[game.difficulty]]">{{ {
      easy: "かんたん", normal: "ふつう", hard: "むずかしい"
    }[game.difficulty] }}</span>
    <div :class="$style.grid">
      <span>スコア</span>
      <span :class="$style.score">{{ game.score }}</span>
      <span>ランク</span>
      <span :class="[$style.rank, $style[`rank${rank}`]]">{{ rank }}</span>
    </div>
    <Button :class="$style.restart" @click="restart">決定キーを押してタイトルに戻る</Button>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.2em;

  .difficulty {
    font-size: 4em;
    font-weight: bold;

    &.easy {
      color: #6e9abd;
    }

    &.normal {
      color: #b19434;
    }

    &.hard {
      color: #aa2095;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1em 3.5em;
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

    .rankS,
    .rankA,
    .rankB {
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
