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

const quizDuration = 5000;
const choiceCount = 4;

const progressRef = ref<typeof ProgressBar>();
const languageRef = ref<Language>(Languages[0]);
const choicesRef = ref<Language[]>([]);

const newQuiz = async () => {
  const language = pickArrayByRandom(Languages);
  const choices = shuffleArray([...shuffleArray([...Languages]).filter(l => l !== language).slice(0, choiceCount - 1), language]);
  languageRef.value = language;
  choicesRef.value = choices;

  progressRef.value?.startCountdown(quizDuration);
}

function answer(choiced: Language) {
  if (choiced === languageRef.value) {
    newQuiz();
  }
}

onMounted(newQuiz);
</script>

<template>
  <BaseView :class="$style.view">
    <ProgressBar ref="progressRef" @timeout="newQuiz" />
    <Suspense>
      <Code :language="languageRef" />
      <template #fallback>
        <Loader />
      </template>
    </Suspense>
    <div :class="$style.choices">
      <Button v-for="choice in choicesRef" :key="choice.displayName" @click="answer(choice)">
        {{ choice.displayName }}
      </Button>
    </div>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
}

.choices {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
