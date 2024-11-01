<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { pickArrayByRandom, shuffleArray } from '@/utils/random';
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

const game = useGameStore();
const view = useViewStore();
const input = useInputStore();
const progressRef = ref<typeof ProgressBar>();
const languageRef = ref<Language>(Languages[0]);
const choicesRef = ref<Language[]>([]);

let quizStartTime = 0;
let prevLanguage: Language;

/** すでに1度間違えているかどうか */
let isAlreadyMissed = false;

const newQuiz = async () => {
  isAlreadyMissed = false;

  const language = pickArrayByRandom(Languages, [prevLanguage]);
  const choices = shuffleArray([...shuffleArray([...Languages]).filter(l => l !== language).slice(0, 3), language]);
  languageRef.value = language;
  choicesRef.value = choices;
  quizStartTime = performance.now();

  prevLanguage = language;
}

function answer(choiced: Language) {
  const isCorrect = choiced === languageRef.value;

  if (isCorrect) {
    game.score += Math.round(1000 * 50 / (performance.now() - quizStartTime));
  } else {
    if (!isAlreadyMissed) {
      game.score -= 10;
      game.score = Math.max(0, game.score);
    }
    isAlreadyMissed = true;
  }

  if (isCorrect) newQuiz();
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
    view.state = "result";
  }, gameDuration);
});
</script>

<template>
  <BaseView :class="$style.view">
    <div :class="$style.score">
      Score: <span>{{ game.score }}</span>
    </div>
    <Suspense>
      <Code :language="languageRef" :class="$style.code" />
      <template #fallback>
        <div :class="$style.code">
          <Loader />
        </div>
      </template>
    </Suspense>
    <ButtonGrid>
      <Button v-for="choice in choicesRef" :key="choice.displayName" @click="answer(choice)">
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
