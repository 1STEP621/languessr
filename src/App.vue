<script setup lang="ts">
import { type BundledLanguage, type BundledTheme, type HighlighterGeneric } from 'shiki';
import { onMounted, ref, watch, type Component } from 'vue';
import Code from './assets/components/Code.vue';
import Button from './assets/components/Button.vue';
import { pickArrayByRandom, shuffleArray } from './utils/random';
import { availableLangs, type Lang, langPretty, quizzes } from './languages';

const quizDuration = 5000;

const choices = ref([] as Lang[]);
const ans = ref(undefined as string | undefined);
const lastTime = ref(0);
const now = ref(0);

const newQuiz = async () => {
  const quiz = pickArrayByRandom(quizzes);
  const lang = pickArrayByRandom(availableLangs[quiz]);
  lastTime.value = Date.now();
  choices.value = shuffleArray([...shuffleArray(availableLangs[quiz].filter(e => e !== lang)).slice(0, 4), lang]);
  ans.value = lang;
}

setInterval(() => now.value = Date.now(), 15);

onMounted(newQuiz);

function answer(choice: Lang) {
  if (choice === ans.value) {
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
      <Code quiz="fizzbuzz" lang="bash" extension="bash" />
      <template #fallback>
        aaa
      </template>
    </Suspense>
    <div :class="$style.choices">
      <Button v-for="choice in choices" :key="choice" @click="answer(choice)">
        {{ langPretty[choice] }}
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
