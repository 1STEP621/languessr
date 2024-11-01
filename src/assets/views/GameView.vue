<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { pickElementByRandom, shuffleArray } from '@/utils/random';
import Languages from '../../languages';
import type { Language } from '../languages/base';
import BaseView from './BaseView.vue';
import Code from '@/assets/components/Code.vue';
import Button from '@/assets/components/Button.vue';
import ProgressBar from '@/assets/components/ProgressBar.vue';
import Loader from '@/assets/components/Loader.vue';
import ButtonGrid from '@/assets/components/ButtonGrid.vue';
import { useGameStore } from '../../stores/game';
import { useViewStore } from '@/stores/view';
import { useInputStore } from '@/stores/input';

const gameDuration = 1000 * 60;
const hintDuration = 1000 * 5;
const blockInputDuration = 1000;

const correct = new Audio("/correct.mp3");
const incorrect = new Audio("/incorrect.mp3");
const finish = new Audio("/finish.mp3");

const game = useGameStore();
const view = useViewStore();
const input = useInputStore();
const progressRef = ref<typeof ProgressBar>();
const languageRef = ref<Language>(Languages[0]);
const choicesRef = ref<Language[]>([]);
const blockInputRef = ref(false);
const hintRef = ref("");

let quizStartTime = 0;

let hintInterval = 0;

let prevLanguage: Language;

/** すでに1度間違えているかどうか */
let isAlreadyMissed = false;

const newHint = () => {
  hintRef.value = pickElementByRandom(languageRef.value.hints);
}

const newQuiz = async () => {
  isAlreadyMissed = false;

  const language = pickElementByRandom(Languages, [prevLanguage]);
  const choices = shuffleArray([...shuffleArray([...Languages]).filter(l => l !== language).slice(0, 3), language]);
  languageRef.value = language;
  choicesRef.value = choices;
  quizStartTime = performance.now();
  newHint();
  clearInterval(hintInterval);
  hintInterval = setInterval(newHint, hintDuration);

  prevLanguage = language;
}

function answer(choiced: Language) {
  if (blockInputRef.value) return;

  const isCorrect = choiced === languageRef.value;

  if (isCorrect) {
    correct.currentTime = 0;
    correct.play();
    game.score += Math.min(Math.round(1000 * 50 / (performance.now() - quizStartTime)), 100);
    newQuiz();
  } else {
    incorrect.currentTime = 0;
    incorrect.play();

    // NOTE: 初心者用にしてたけど、連打すると大変なことになるので
    if (!isAlreadyMissed || ["hard", "normal"].includes(game.difficulty)) {
      game.score -= 10;
      game.score = Math.max(0, game.score);
    }
    isAlreadyMissed = true;
    blockInputRef.value = true;
    setTimeout(() => {
      blockInputRef.value = false;
    }, blockInputDuration);
  }
}

onMounted(() => {
  // NOTE: 入力をセットアップする
  input.addEventListener("up", () => answer(choicesRef.value[0]), { view: "game" });
  input.addEventListener("right", () => answer(choicesRef.value[1]), { view: "game" });
  input.addEventListener("down", () => answer(choicesRef.value[2]), { view: "game" });
  input.addEventListener("left", () => answer(choicesRef.value[3]), { view: "game" });

  // NOTE: ゲームを開始する
  progressRef.value?.startCountdown(gameDuration);
  newQuiz();
  setTimeout(() => {
    finish.play();
    view.state = "result";
  }, gameDuration);
});
</script>

<template>
  <BaseView :class="$style.view">
    <div :class="$style.score">
      Score: <span>{{ game.score }}</span>
    </div>
    <span v-if="['easy', 'normal'].includes(game.difficulty)" :class="$style.hint">Tips: {{ hintRef }}</span>
    <Suspense>
      <Code :language="languageRef" :class="$style.code" />
      <template #fallback>
        <div :class="$style.code">
          <Loader />
        </div>
      </template>
    </Suspense>
    <ButtonGrid>
      <Button v-for="choice in choicesRef" :key="choice.displayName" :disabled="blockInputRef" @click="answer(choice)">
        {{ choice.displayName }}
      </Button>
    </ButtonGrid>
    <ProgressBar ref="progressRef" @timeout="newQuiz" />
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

.score {
  color: #808080;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2em;

  span {
    color: var(--c-primary);
    font-weight: bold;
  }
}

.hint {
  color: #808080;
  font-size: 1.4em;
}

.code {
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  overflow: hidden;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 10%;
    background: linear-gradient(to bottom, var(--c-bg), transparent);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 10%;
    background: linear-gradient(to top, var(--c-bg), transparent);
  }
}
</style>
