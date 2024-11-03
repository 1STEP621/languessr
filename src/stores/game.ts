import { defineStore } from "pinia"
import { ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const score = ref(0);

  const difficulty = ref<"easy" | "normal" | "hard">("easy");

  function $reset() {
    score.value = 0;
    difficulty.value = "easy";
  }

  return { score, difficulty, $reset };
});
