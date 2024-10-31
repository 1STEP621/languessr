<script lang="ts" setup>
import { highlightableLangs, type Lang, type Quiz } from '@/languages';
import { useHighlighterStore } from '@/stores/highlighter';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  quiz: Quiz;
  lang: Lang;
  // TODO: なんとか型付けする
  extension: string;
}>();
const htmlRef = ref<string>();

const highlighter = await useHighlighterStore().promise;
const codeText = (await import(`../quizzes/${props.quiz}/${props.lang}.${props.extension}?raw`)).default;

onMounted(() => {
  htmlRef.value = highlighter.codeToHtml(codeText, {
    lang: highlightableLangs.find(e => e === props.lang) ?? "text",
    theme: highlighter.getLoadedThemes()[0],
  });
});
</script>

<template>
  <div :class="$style.code" v-html="htmlRef"></div>
</template>

<style module>
.code pre {
  font-size: 18px;
  border-radius: 10px;
  padding: 20px;
  max-width: 70vw;
  word-break: break-all;
  overflow-wrap: anywhere;
}
</style>
