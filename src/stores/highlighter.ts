import { defineStore } from "pinia"
import { createHighlighter, type Highlighter } from "shiki";
import { ref } from "vue";
import Languages from "../languages";

export const useHighlighterStore = defineStore("highlighter", () => {
  const highlighterRef = ref<Highlighter>();
  const promise = createHighlighter({
      langs: Languages.map(l => l.highlightType).filter(t => !!t),
      themes: ["one-dark-pro"],
  }).then(highlighter => highlighterRef.value = highlighter);

  return {
    promise,
    highlighter: highlighterRef,
  };
});
