<script lang="ts" setup>
import { useHighlighterStore } from '@/stores/highlighter';
import { onMounted, ref } from 'vue';
import type { Language } from '../languages/base';
import { pickArrayByRandom } from '@/utils/random';

const props = defineProps<{
  language: Language;
}>();
const htmlRef = ref<string>();

const highlighter = await useHighlighterStore().promise;

onMounted(() => {
  const language = props.language;
  htmlRef.value = highlighter.codeToHtml(pickArrayByRandom(language.programs), {
    lang: language.highlightType ?? "text",
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
