import { defineStore } from "pinia"
import { createHighlighter, type Highlighter } from "shiki";
import { ref } from "vue";
import { highlightableLangs } from "../languages";

export const useHighlighterStore = defineStore("highlighter", () => {
  const highlighterRef = ref<Highlighter>();
  const promise = createHighlighter({
      langs: highlightableLangs,
      themes: ["one-dark-pro"],
  }).then(highlighter => highlighterRef.value = highlighter);

  return {
    promise,
    highlighter: highlighterRef,
  };
});
