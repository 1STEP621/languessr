<script setup lang="ts">
import { ref, watch } from 'vue';
import Code from './assets/components/Code.vue';
import Button from './assets/components/Button.vue';
import { pickArrayByRandom, shuffleArray } from './utils/random';
import Languages from './languages';
import type { Language } from './assets/languages/base';

const quizDuration = 5000;

const lastTime = ref(0);
const now = ref(0);
const languageRef = ref<Language>(Languages[0]);
const choicesRef = ref<Language[]>([]);

const newQuiz = async () => {
  const language = pickArrayByRandom(Languages);
  const choices = shuffleArray([...shuffleArray([...Languages]).filter(l => l !== language).slice(0, 4), language]);

  languageRef.value = language;
  choicesRef.value = choices;

  lastTime.value = Date.now();
}

setInterval(() => now.value = Date.now(), 15);

newQuiz();

function answer(choiced: Language) {
  if (choiced === languageRef.value) {
    newQuiz();
  }
}

watch(() => now.value, () => {
  if (now.value - lastTime.value > quizDuration) {
    newQuiz();
  }
})
</script>

<template>
  <main :class="$style.root">
    <div :class="$style.progressBar" :style="{ width: `${100 - (now - lastTime) / quizDuration * 100}%` }"></div>
    <Suspense>
      <Code :language="languageRef" />
      <template #fallback>
        aaa
      </template>
    </Suspense>
    <div :class="$style.choices">
      <Button v-for="choice in choicesRef" :key="choice.displayName" @click="answer(choice)">
        {{ choice.displayName }}
      </Button>
    </div>
  </main>
</template>

<style module>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
}

.progressBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: var(--c-primary);
}

.choices {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
